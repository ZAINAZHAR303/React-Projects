import { Dvr } from "@mui/icons-material";
import React, { useState } from "react";
import QRCode from "react-qr-code";
const QrGenerator = () => {
  const [qrcode, setQrcode] = useState("");
  const [input, setInput] = useState("");
  function handleQrCode() {
    setQrcode(input);
    setInput("");
  }
  return (
    <div className="flex flex-col items-center gap-8">
      <div >
        <h1 className="text-[24px] font-semibold mb-4 ">QR Code Generator</h1>
        <input
        className="border-2 rounded-lg p-2 focus:outline-none mr-2 "
          type="text"
          name="qr-code"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your value"
        />
        <button
          className="bg-orange-400 text-white p-2 rounded-md disabled:bg-orange-200 cursor-pointer "
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleQrCode}>
          Generate
        </button>
      </div>
      <div>
        <QRCode id="qr-code-value" value={qrcode} size={200} bgColor="#fff" />
      </div>
    </div>
  );
};

export default QrGenerator;
