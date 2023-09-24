import { Knob } from "react-rotary-knob";
import * as skins from "react-rotary-knob-skin-pack";
import { animated, useSpring } from "react-spring";
import "./RainbowKnob.css";

const RainbowKnob = (props) => {
  const animProps = useSpring({
    background: `conic-gradient(from 90deg,${props.rainbow})`,
  });

  return (
    <div className="knobAndRainbow">
      <Knob
        className="knobOverride"
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
          transition: "all .5s ease",
          WebkitTransition: "all .5s ease",
          MozTransition: "all .5s ease",
        }}
      />
      <animated.div
        className="wheel"
        style={{
          background: animProps.background,
          width: "216px",
          height: "216px",
        }}
      />
    </div>
  );
};

export default RainbowKnob;
