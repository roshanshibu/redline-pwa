import { useState } from "react";
import "./ogUI.css";
import NormalKnob from "../../components/NormalKnob/NormalKnob";

const OgUI = () => {
  const [knobPos, setKnobPos] = useState(0);
  const [red, setRed] = useState("#CF2431");
  const [orange, setOrange] = useState("#DA681D");
  const [yellow, setYellow] = useState("#453f07");
  const [green, setGreen] = useState("#094211");
  const [blue, setBlue] = useState("#0b384a");
  const [violet, setViolet] = useState("#36114c");
  const [black, setBlack] = useState("#111111");

  const [innerCircleText, setInnerCircleText] = useState("Rock");
  const [innerCircleTextGlow, setInnerCircleTextGlow] = useState("#cf2431");

  const updateKnobPos = (newPos) => {
    console.log(`new position is  ${newPos}`);
    setKnobPos(newPos);
    if (newPos > 10) {
      setRed("#CF2431");
      setOrange("#DA681D");
      setYellow("#453f07");
      setGreen("#094211");
      setBlue("#0b384a");
      setViolet("#36114c");
      setInnerCircleText("Rock");
      setInnerCircleTextGlow("#cf243");
    }
    if (newPos > 25) {
      setRed("#37090c");
      setOrange("#431f07");
      setYellow("#E9D514");
      setInnerCircleText("Electronic");
      setInnerCircleTextGlow("#e9d514");
    }
    if (newPos > 35) {
      setYellow("#453f07");
      setGreen("#27CB3E");
      setInnerCircleText("HipHop");
      setInnerCircleTextGlow("#27cb3e");
    }
    if (newPos > 50) {
      setGreen("#094211");
      setBlue("#2EA1CE");
      setInnerCircleText("Country");
      setInnerCircleTextGlow("#2ea1ce");
    }
    if (newPos > 70) {
      setBlue("#0b384a");
      setViolet("#8132B2");
      setInnerCircleText("Jazz");
      setInnerCircleTextGlow("#8132b2");
    }
    if (newPos > 90) {
      setViolet("#36114c");
      setRed("#CF2431");
      setInnerCircleText("Pop");
      setInnerCircleTextGlow("#cb131f");
    }
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
          <p
            className="innerCircleText"
            style={{ textShadow: `0px 0px 10px ${innerCircleTextGlow}` }}
          >
            {innerCircleText}
          </p>
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
