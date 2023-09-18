import { useState } from "react";
import "./ogUI.css";
import NormalKnob from "../../components/NormalKnob/NormalKnob";

const OgUI = () => {
  const [knobPos, setKnobPos] = useState(50);
  const updateKnobPos = (newPos) => {
    console.log(`new position is  ${newPos}`);
    setKnobPos(newPos);
  };
  return (
    <div className="ogContainer">
      <NormalKnob knobPos={knobPos} updateKnobPos={updateKnobPos} />
      {/* <p>{knobPos}</p> */}
      <div className="ogRainbowContainer">
        <span className="circle red"></span>
        <span className="circle orange"></span>
        <span className="circle yellow"></span>
        <span className="circle green"></span>
        <span className="circle blue"></span>
        <span className="circle violet"></span>
        <span className="circle black"></span>
      </div>
    </div>
  );
};

export default OgUI;
