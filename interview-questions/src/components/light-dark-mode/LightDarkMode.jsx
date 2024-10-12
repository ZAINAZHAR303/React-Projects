import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import "./theme.css"
const LightDarkMode = () => {

    const[theme,setTheme] = useLocalStorage('theme','dark');
    function handleTogleTheme(){
        setTheme(theme === 'light'? 'dark' : 'light');
  
    }
    console.log(theme);
  return (
    <div data-theme = {theme} className="mode">
      <div className="container">
        <p>this is a text element</p>
        <button onClick={handleTogleTheme} className="p-2 ">click here!</button>
      </div>
    </div>
  );
};

export default LightDarkMode;
