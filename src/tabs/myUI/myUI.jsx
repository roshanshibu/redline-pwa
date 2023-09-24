import { useEffect, useRef, useState } from "react";
import "./myUI.css";
import RainbowKnob from "../../components/RainbowKnob/RainbowKnob";
import PlaceholderAlbumArt from "../../assets/albumart_p.png";
import PlayIcon from "../../assets/PlayIcon.svg";
import PauseIcon from "../../assets/PauseIcon.svg";

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

  const [mySongUrl, setMySongUrl] = useState("");
  const myAudioRef = useRef();

  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [timeProgress, setTimeProgress] = useState(0);

  useEffect(() => {
    setDuration(myAudioRef.current.duration);
  }, []);

  const onMusicTimeUpdate = () => {
    setTimeProgress(myAudioRef.current.currentTime);
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      myAudioRef.current.pause();
      setIsPlaying(false);
    } else {
      myAudioRef.current.play();
      setIsPlaying(true);
    }
  };
  const updateAndPlaySong = (newSongUrl) => {
    setMySongUrl(
      "https://raw.githubusercontent.com/roshanshibu/CocoBackend/master/songs/dat/" +
        newSongUrl
    );
    if (myAudioRef.current) {
      myAudioRef.current.load();
      setIsPlaying(true);
    }
  };

  const updateKnobPos = (newPos) => {
    // console.log(`new position is  ${newPos}`);
    setKnobPos(newPos);
    if (newPos > 10)
      setRainbow(
        `${red}, ${red}, ${red}, ${orange}, ${orange}, ${yellow}, ${yellow}, ${red}`
      );
    if (newPos > 20)
      setRainbow(
        `${orange}, ${orange}, ${yellow}, ${yellow}, ${yellow}, ${green}, ${green}, ${orange}`
      );
    if (newPos > 30) updateAndPlaySong("rock1.mp3");
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
    if (newPos > 70) updateAndPlaySong("electronic1.mp3");
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
    <div className="mainContainer">
      <div className="topContainer">
        <RainbowKnob
          knobPos={knobPos}
          updateKnobPos={updateKnobPos}
          rainbow={rainbow}
        />

        {/* <p>{knobPos}</p> */}
        <div className="songAndArtistName">
          <p className="mySongName">Collide</p>
          <p className="myArtistName">Elektromania</p>
        </div>

        <div className="albumArtContainer">
          <img src={PlaceholderAlbumArt} className="albumArt" alt="album art" />
        </div>
      </div>
      <div className="bottomContainer">
        <img
          src={isPlaying ? PauseIcon : PlayIcon}
          alt="play pause icon"
          className="playPauseIcon"
          onClick={togglePlayPause}
        />
        <div className="timelineContainer">
          <input
            type="range"
            min="0"
            max={duration}
            default="0"
            value={timeProgress}
            readOnly
          />
        </div>
        <audio
          src={mySongUrl}
          ref={myAudioRef}
          autoPlay={true}
          loop
          onTimeUpdate={onMusicTimeUpdate}
          onLoad={() => {
            setDuration(myAudioRef.current.duration);
          }}
        ></audio>
      </div>
    </div>
  );
};

export default MyUI;
