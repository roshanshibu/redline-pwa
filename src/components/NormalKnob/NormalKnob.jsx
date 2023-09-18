import { Knob } from "react-rotary-knob";
import * as skins from "react-rotary-knob-skin-pack";
import "./NormalKnob.css";

const NormalKnob = (props) => {
  return (
    <Knob
      className="normalKnob"
      skin={skins.s1}
      min={0}
      max={100}
      value={props.knobPos}
      onChange={props.updateKnobPos}
      unlockDistance={0}
      preciseMode={false}
      style={{
        width: "150px",
        height: "150px",
        marginTop: "60px",
        marginLeft: "15px",
      }}
    />
  );
};

export default NormalKnob;
