import { CircleHalf, Palette, Sun } from "@phosphor-icons/react";
import styles from "./App.module.css";
import { ChangeEvent, useState } from "react";

interface hslaProps {
  h: number;
  s: number;
  l: number;
  a: number;
}

export function App() {
  const [hsla, setHsla] = useState({ h: 180, s: 100, l: 50, a: 100 });

  function handleHueChange(event: ChangeEvent<HTMLInputElement>) {
    const newHueValue = event.target.value;
    const newHsla: hslaProps = { ...hsla, h: Number.parseFloat(newHueValue) };
    setHsla(newHsla);
  }

  function handleLightnessChange(event: ChangeEvent<HTMLInputElement>) {
    const newLightnessValue = event.target.value;
    const newHsla: hslaProps = {
      ...hsla,
      l: Number.parseFloat(newLightnessValue),
    };
    setHsla(newHsla);
  }

  function handleAlphaChange(event: ChangeEvent<HTMLInputElement>) {
    const newAlphaValue = event.target.value;
    const newHsla: hslaProps = {
      ...hsla,
      a: Number.parseFloat(newAlphaValue),
    };
    setHsla(newHsla);
  }
  return (
    <div className={styles.container}>
      <div
        className={styles.light}
        style={{
          backgroundColor: `hsla(${hsla.h}, 100%, ${hsla.l}%, ${hsla.a / 100})`,
          boxShadow: `0px 0px 53px 13px hsla(${hsla.h}, 100%, ${hsla.l}%, ${
            hsla.a / 100
          })`,
        }}
      ></div>

      <h1>Lighting Controls</h1>
      <div className={styles.hug}>
        <div className={styles.controls}>
          <label htmlFor="hueControl">
            <Palette size={25} />
          </label>
          <input
            type="range"
            id="hueControl"
            min="0"
            max="360"
            value={hsla.h}
            onChange={handleHueChange}
            className={styles.hueControlInput}
          ></input>
        </div>
        <div className={styles.controls}>
          <label htmlFor="lightnessControl">
            <Sun size={25} />
          </label>
          <input
            type="range"
            id="lightnessControl"
            min="0"
            max="100"
            value={hsla.l}
            onChange={handleLightnessChange}
            className={styles.controlInput}
          ></input>
        </div>
        <div className={styles.controls}>
          <label htmlFor="alphaControl">
            <CircleHalf size={25} />
          </label>
          <input
            type="range"
            id="alphaControl"
            min="0"
            max="100"
            value={hsla.a}
            onChange={handleAlphaChange}
            className={styles.controlInput}
          ></input>
        </div>
      </div>
    </div>
  );
}
