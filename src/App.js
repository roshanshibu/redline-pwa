import { useState } from "react";
import "./App.css";
import MyUI from "./tabs/myUI/myUI";
import OgUI from "./tabs/ogUI/ogUI";

function App() {
  const [tabSwitch, setTabSwitch] = useState(false);
  const toggleTab = () => {
    setTabSwitch((tabSwitch) => !tabSwitch);
  };
  return (
    <div className="App">
      <div className="tabSwitchContainer">
        <p
          className={`uiTabButton ${tabSwitch ? "" : "tabSelected"}`}
          onClick={toggleTab}
        >
          Original
        </p>
        <div className="redLine"></div>
        <p
          className={`uiTabButton ${tabSwitch ? "tabSelected" : ""}`}
          onClick={toggleTab}
        >
          Updated
        </p>
      </div>
      {tabSwitch ? <MyUI /> : <OgUI />}
    </div>
  );
}

export default App;
