import { useRef, useState } from "react";
import "./ogUI.css";
import NormalKnob from "../../components/NormalKnob/NormalKnob";

const OgUI = () => {
  const [knobPos, setKnobPos] = useState(0);
  const [red, setRed] = useState("#37090c");
  const [orange, setOrange] = useState("#DA681D");
  const [yellow, setYellow] = useState("#453f07");
  const [green, setGreen] = useState("#094211");
  const [blue, setBlue] = useState("#0b384a");
  const [violet, setViolet] = useState("#36114c");
  let black = "#111111";

  const [innerCircleText, setInnerCircleText] = useState("Rock");
  const [innerCircleTextGlow, setInnerCircleTextGlow] = useState("#cf2431");

  const [currentSongName, setCurrentSongName] = useState("");
  const [currentArtist, setCurrentArtist] = useState("");

  const [songUrl, setSongUrl] = useState("");
  const audioRef = useRef();

  const updateAndPlaySong = (newSongUrl) => {
    setSongUrl(
      "https://raw.githubusercontent.com/roshanshibu/CocoBackend/master/songs/dat/" +
        newSongUrl
    );
    if (audioRef.current) {
      audioRef.current.load();
    }
  };
  const updateKnobPos = (newPos) => {
    console.log(`new position is  ${newPos}`);
    setKnobPos(newPos);
    if (newPos > 0) {
      setRed("#37090c");
      setOrange("#DA681D");
      setYellow("#453f07");
      setGreen("#094211");
      setBlue("#0b384a");
      setViolet("#36114c");
      setInnerCircleText("Rock");
      setInnerCircleTextGlow("#cf243");
      updateAndPlaySong("rock1.mp3");
      setCurrentSongName("Thor's Hammer");
      setCurrentArtist("Ethan Meixsell");
    }
    if (newPos > 8) {
      updateAndPlaySong("rock2.mp3");
      setCurrentSongName("Infraction");
      setCurrentArtist("Slash Grind");
    }
    if (newPos > 16) {
      setRed("#37090c");
      setOrange("#431f07");
      setYellow("#E9D514");
      setInnerCircleText("Electronic");
      setInnerCircleTextGlow("#e9d514");
      updateAndPlaySong("electronic1.mp3");
      setCurrentSongName("Collide");
      setCurrentArtist("Elektronomia");
    }
    if (newPos > 24) {
      updateAndPlaySong("electronic2.mp3");
      setCurrentSongName("Eclipse");
      setCurrentArtist("Jim Yosef");
    }
    if (newPos > 32) {
      setYellow("#453f07");
      setGreen("#27CB3E");
      setInnerCircleText("HipHop");
      setInnerCircleTextGlow("#27cb3e");
      updateAndPlaySong("hiphop1.mp3");
      setCurrentSongName("Hotline Bling");
      setCurrentArtist("Drake");
    }
    if (newPos > 40) {
      updateAndPlaySong("hiphop2.mp3");
      setCurrentSongName("Sunflower");
      setCurrentArtist("Post Malone");
    }
    if (newPos > 48) {
      setGreen("#094211");
      setBlue("#2EA1CE");
      setInnerCircleText("Country");
      setInnerCircleTextGlow("#2ea1ce");
      updateAndPlaySong("country1.mp3");
      setCurrentSongName("Lonesome Avenue");
      setCurrentArtist("The 126ers");
    }
    if (newPos > 56) {
      updateAndPlaySong("country2.mp3");
      setCurrentSongName("Humidity");
      setCurrentArtist("Silent Partner");
    }
    if (newPos > 64) {
      setBlue("#0b384a");
      setViolet("#8132B2");
      setInnerCircleText("Jazz");
      setInnerCircleTextGlow("#8132b2");
      updateAndPlaySong("jazz1.mp3");
      setCurrentSongName("Silk");
      setCurrentArtist("Giorgio Di Campo");
    }
    if (newPos > 72) {
      updateAndPlaySong("jazz2.mp3");
      setCurrentSongName("Sweet Chicago");
      setCurrentArtist("Envadi Jacobs");
    }
    if (newPos > 80) {
      setViolet("#36114c");
      setRed("#CF2431");
      setInnerCircleText("Pop");
      setInnerCircleTextGlow("#cb131f");
      updateAndPlaySong("pop1.mp3");
      setCurrentSongName("Stay");
      setCurrentArtist("Justin Bieber");
    }
    if (newPos > 88) {
      updateAndPlaySong("pop2.mp3");
      setCurrentSongName("Stay The Night");
      setCurrentArtist("Sigala");
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
        <p className="ogSongName">{currentSongName}</p>
        <p className="ogArtistName">{currentArtist}</p>
      </div>
      <div style={{ width: "160px" }}>
        {" "}
        <audio
          src={songUrl}
          ref={audioRef}
          autoPlay={true}
          loop
          // onTimeUpdate={onMusicTimeUpdate}
          // onLoad={() => {
          //   setDuration(audioRef.current.duration);
          // }}
        ></audio>
      </div>
    </div>
  );
};

export default OgUI;
