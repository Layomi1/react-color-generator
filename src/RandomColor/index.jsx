import { useState } from "react";
import styles from "./RandomColor.module.css";
import { useEffect } from "react";

const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  const handleCreateRandomRgbColor = () => {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);
    setColor(`rgb(${r},${g},${b})`);
  };

  const handleCreateRandomHexColor = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setColor(hexColor);
  };

  useEffect(() => {
    if (typeOfColor === "rgb") {
      handleCreateRandomRgbColor;
    } else {
      handleCreateRandomHexColor;
    }
  });

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
        textAlign: "center",
      }}
    >
      <button onClick={() => setTypeOfColor("hex")}>Create HEX Color</button>
      <button onClick={() => setTypeOfColor("rgb")} className={styles.rgb}>
        Create RGB Color
      </button>
      <button
        onClick={
          typeOfColor === "hex"
            ? handleCreateRandomHexColor
            : handleCreateRandomRgbColor
        }
      >
        Generate Random Color
      </button>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "FFF",
          fontSize: "60px",
          marginTop: "50px",
          flexDirection: "column",
        }}
      >
        <h3> {typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
        <h1> {color}</h1>
      </div>
    </div>
  );
};

export default RandomColor;
