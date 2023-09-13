import { useState } from "react";
import { Knob } from "react-rotary-knob";
import * as skins from "react-rotary-knob-skin-pack";
import { animated, useSpring } from "react-spring";
import "./App.css";
const red = "#CF2431";
const orange = "#DA681D";
const yellow = "#E9D514";
const green = "#27CB3E";
const blue = "#2EA1CE";
const indigo = "#5682B8";
const violet = "#8132B2";

function App() {
  const [knobPos, setKnobPos] = useState(50);
  const [rainbow, setRainbow] = useState(
    `${green}, ${green}, ${green}, ${green}, ${blue}, ${blue}, ${blue}, ${green}`
  );
  const animProps = useSpring({
    background: `conic-gradient(from 90deg,${rainbow})`,
  });

  const updateKnobPos = (newPos) => {
    console.log(`new position is  ${newPos}`);
    setKnobPos(newPos);
    if (newPos > 10)
      setRainbow(
        `${red}, ${red}, ${red}, ${orange}, ${orange}, ${yellow}, ${yellow}, ${red}`
      );
    if (newPos > 20)
      setRainbow(
        `${orange}, ${orange}, ${yellow}, ${yellow}, ${yellow}, ${green}, ${green}, ${orange}`
      );
    if (newPos > 30)
      setRainbow(
        `${yellow}, ${green}, ${green}, ${green}, ${green}, ${blue}, ${blue}, ${yellow}`
      );
    if (newPos > 40)
      setRainbow(
        `${green}, ${green}, ${green}, ${green}, ${blue}, ${blue}, ${blue}, ${green}`
      );
    if (newPos > 50)
      setRainbow(
        `${blue}, ${green}, ${green}, ${green}, ${blue}, ${blue}, ${blue}, ${blue}`
      );
    if (newPos > 60)
      setRainbow(
        `${blue}, ${blue}, ${blue}, ${indigo}, ${indigo}, ${indigo}, ${indigo}, ${blue}`
      );
    if (newPos > 70)
      setRainbow(
        `${indigo}, ${indigo}, ${indigo}, ${indigo}, ${violet}, ${violet}, ${violet}, ${indigo}`
      );
    if (newPos > 80)
      setRainbow(
        `${indigo}, ${indigo}, ${violet}, ${violet}, ${violet}, ${violet}, ${red}, ${indigo}`
      );
    if (newPos > 90)
      setRainbow(
        `${violet}, ${violet}, ${red}, ${red}, ${red}, ${orange}, ${red}, ${violet}`
      );
  };
  return (
    <div className="App">
      <div className="knobAndRainbow">
        <Knob
          className="knobOverride"
          skin={skins.s1}
          min={0}
          max={100}
          value={knobPos}
          onChange={updateKnobPos}
          unlockDistance={0}
          preciseMode={false}
          style={{
            width: "150px",
            height: "150px",
            transition: "all .5s ease",
            WebkitTransition: "all .5s ease",
            MozTransition: "all .5s ease",
          }}
        />
        <animated.div
          className="wheel"
          style={{
            background: animProps.background,
            width: "220px",
            height: "220px",
          }}
        />
      </div>
      <p>{knobPos}</p>
    </div>
  );
}

export default App;
