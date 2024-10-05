import React, { useEffect, useRef } from "react";
import Phaser from "phaser";
import astronaut from "../assets/astronaut.png";
import collectible from "../assets/collectible.png";
import background from "../assets/background.jpg";
const PhaserGame = () => {
  const gameRef = useRef(null);

  useEffect(() => {
    const config = {
      type: Phaser.AUTO,
      scale: {
        mode: Phaser.Scale.ENVELOP, // Scale the game to fit the available screen size
        autoCenter: Phaser.Scale.CENTER_BOTH,
      },
      parent: gameRef.current, // Attach Phaser to the React element
      physics: {
        default: "matter",
        matter: {
          gravity: { y: 0 }, // No gravity for Zero-G
          debug: true,
        },
      },
      scene: {
        preload: preload,
        create: create,
        update: update,
      },
    };

    const game = new Phaser.Game(config);

    // Clean up the game when the component unmounts
    return () => {
      game.destroy(true);
    };
  }, []);

  const preload = function () {
    this.load.image("astronaut", astronaut);
    this.load.image("collectible", collectible);
    this.load.image("background", background);
  };

  let player,
    cursors,
    timerText,
    timeLeft = 60;
  let collectibles = [];

  const create = function () {
    // Add player
    player = this.matter.add.sprite(400, 300, "astronaut").setDepth(1);
    player.setBounce(0.9);
    player.setFrictionAir(0.02); // Simulate floating in space
    player.setDisplaySize(50, 70);

    // Add background
    const backgroundImage = this.add.image(
      this.sys.canvas.width / 2,
      this.sys.canvas.height / 2,
      "background"
    );
    backgroundImage.setScale(Phaser.Scale.FIT);
    backgroundImage.setOrigin(0.5, 0.5); // Set the origin to the center of the image

    // Input controls
    cursors = this.input.keyboard.createCursorKeys();

    // Timer
    timerText = this.add.text(16, 16, "Time Left: 60", {
      fontSize: "32px",
      fill: "#ffffff",
    });

    // Create collectibles
    for (let i = 0; i < 7; i++) {
      const collectible = this.matter.add.sprite(
        Phaser.Math.Between(50, 750),
        Phaser.Math.Between(50, 550),
        "collectible"
      );
      collectible.setFrictionAir(0.02);
      collectibles.push(collectible);
      collectible.setDisplaySize(50, 70);
    }

    // Collision detection
    this.matter.world.on("collisionstart", (event, bodyA, bodyB) => {
      if (
        (bodyA === player.body && collectibles.includes(bodyB.gameObject)) ||
        (bodyB === player.body && collectibles.includes(bodyA.gameObject))
      ) {
        const collectibleIndex =
          collectibles.indexOf(bodyA.gameObject) !== -1
            ? bodyA.gameObject
            : bodyB.gameObject;
        collectibleIndex.destroy();
        collectibles.splice(collectibles.indexOf(collectibleIndex), 1); // Remove from array
      }
    });
  };

  const update = function () {
    // Player movement
    if (cursors.left.isDown) {
      player.applyForce({ x: -0.01, y: 0 });
    } else if (cursors.right.isDown) {
      player.applyForce({ x: 0.01, y: 0 });
    }

    if (cursors.up.isDown) {
      player.applyForce({ x: 0, y: -0.01 });
    } else if (cursors.down.isDown) {
      player.applyForce({ x: 0, y: 0.01 });
    }

    // Timer logic
    timeLeft -= 1 / 60;
    timerText.setText(`Time Left: ${Math.ceil(timeLeft)}`);

    if (timeLeft <= 0) {
      this.scene.pause(); // End the game
      timerText.setText("Game Over! You lose.");
    }

    // Check if all collectibles are collected
    if (collectibles.length === 0) {
      this.scene.pause(); // End the game
      timerText.setText("You Win!");
    }
  };

  return (
    <div
      ref={gameRef}
      style={{
        backgroundImage: `url(${background})`,
        width: "800px",
        height: "600px",
        margin: "40px auto",
      }}
    />
  );
};

export default PhaserGame;
