import { useState } from "react";
import "./ogUI.css";
import NormalKnob from "../../components/NormalKnob/NormalKnob";

let red = "#CF2431";
let orange = "#DA681D";
let yellow = "#E9D514";
let green = "#27CB3E";
let blue = "#2EA1CE";
let indigo = "#5682B8";
let violet = "#8132B2";
let black = "#111111";

const OgUI = () => {
  const [knobPos, setKnobPos] = useState(0);
  const updateKnobPos = (newPos) => {
    console.log(`new position is  ${newPos}`);
    setKnobPos(newPos);
  };
  return (
    <div className="ogContainer">
      <NormalKnob knobPos={knobPos} updateKnobPos={updateKnobPos} />
      {/* <p>{knobPos}</p> */}
      <div className="ogRainbowContainer">
        <span className="circle" style={{ backgroundColor: red }}></span>
        <span className="circle" style={{ backgroundColor: orange }}></span>
        <span className="circle" style={{ backgroundColor: yellow }}></span>
        <span className="circle" style={{ backgroundColor: green }}></span>
        <span className="circle" style={{ backgroundColor: blue }}></span>
        <span className="circle" style={{ backgroundColor: violet }}></span>
        <span className="circle" style={{ backgroundColor: black }}></span>
        <div className="innerCircleTextContainer">
          <p className="innerCircleText">Electronic</p>
        </div>
        <div className="outerCircleTextContainer">
          <p className="octTop">Beats</p>
          <p className="octMiddle">Club</p>
          <p className="octBottom">Dance</p>
        </div>
      </div>
      <div className="trackInfoContainer">
        <p className="ogSongName">SongName</p>
        <p className="ogArtistName">Artist</p>
      </div>
      <div style={{ width: "160px" }}></div>
    </div>
  );
};

export default OgUI;
