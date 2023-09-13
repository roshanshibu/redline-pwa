import { useState } from "react";
import { Knob } from "react-rotary-knob";
import * as skins from "react-rotary-knob-skin-pack";
import { animated, useSpring } from "react-spring";
import "./App.css";

function App() {
  const [knobPos, setKnobPos] = useState(50);
  const [rainbow, setRainbow] = useState(
    "violet,indigo,blue,green,orange,yellow,red,violet"
  );
  const animProps = useSpring({
    background: `conic-gradient(from 90deg,${rainbow})`,
  });

  const updateKnobPos = (newPos) => {
    console.log(`new position is  ${newPos}`);
    setKnobPos(newPos);
    if (newPos > 50)
      setRainbow("violet,indigo,blue,green,orange,yellow,red,violet");
    else {
      if (newPos > 20)
        setRainbow("red,blue,blue,orange,orange,yellow,yellow,red");
      else setRainbow("violet,green,green,green,green,green,green,violet");
    }
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
