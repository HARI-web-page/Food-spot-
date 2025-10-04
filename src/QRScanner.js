import React, { useState } from "react";

function QRScanner({ onScan }) {
  const [scanResult, setScanResult] = useState("");

  const handleScan = (data) => {
    if (data) {
      setScanResult(data);
      if (onScan) onScan(data); // send scanned dish to App.js
    }
  };

  return (
    <div>
      <h2>QR Scanner</h2>
      <button onClick={() => handleScan("Fish Curry")}>Simulate Scan</button>
      {scanResult && <p>Scanned: {scanResult}</p>}
    </div>
  );
}

export default QRScanner;
