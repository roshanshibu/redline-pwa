import { useState } from "react";
import "./myUI.css";
import RainbowKnob from "../../components/RainbowKnob/RainbowKnob";

const red = "#CF2431";
const orange = "#DA681D";
const yellow = "#E9D514";
const green = "#27CB3E";
const blue = "#2EA1CE";
const indigo = "#5682B8";
const violet = "#8132B2";

const MyUI = () => {
  const [knobPos, setKnobPos] = useState(0);
  const [rainbow, setRainbow] = useState(
    `${green}, ${green}, ${green}, ${green}, ${blue}, ${blue}, ${blue}, ${green}`
  );

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
    <>
      <RainbowKnob
        knobPos={knobPos}
        updateKnobPos={updateKnobPos}
        rainbow={rainbow}
      />

      <p>{knobPos}</p>
    </>
  );
};

export default MyUI;
