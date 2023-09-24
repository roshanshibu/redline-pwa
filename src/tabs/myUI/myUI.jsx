import { useEffect, useRef, useState } from "react";
import "./myUI.css";
import RainbowKnob from "../../components/RainbowKnob/RainbowKnob";
import PlaceholderAlbumArt from "../../assets/albumart_p.png";
import AArock1 from "../../assets/AArock1.png";
import AArock2 from "../../assets/AArock2.png";
import AAelectronic1 from "../../assets/AAelectronic1.png";
import AAelectronic2 from "../../assets/AAelectronic2.png";
import AAhiphop1 from "../../assets/AAhiphop1.png";
import AAhiphop2 from "../../assets/AAhiphop2.png";
import AAcountry1 from "../../assets/AAcountry1.png";
import AAcountry2 from "../../assets/AAcountry2.png";
import AAjazz1 from "../../assets/AAjazz1.png";
import AAjazz2 from "../../assets/AAjazz2.png";
import AApop1 from "../../assets/AApop1.png";
import AApop2 from "../../assets/AApop2.png";
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
    `${orange}, ${orange}, ${orange}, ${orange}, ${orange}, ${orange}, ${orange}, ${orange}`
  );
  const [mySongName, setMySongName] = useState("Thor's Hammer");
  const [myArtist, setMyArtist] = useState("Ethan Meixsell");
  const [myAlbumArt, setMyAlbumArt] = useState(AArock1);

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

  const setRainbowAndPlay = (
    colors,
    songUrl,
    artistName,
    songName,
    albumArtImage
  ) => {
    setRainbow(colors);
    updateAndPlaySong(songUrl);
    setMySongName(songName);
    setMyArtist(artistName);
    setMyAlbumArt(albumArtImage);
  };
  const updateKnobPos = (newPos) => {
    // console.log(`new position is  ${newPos}`);
    setKnobPos(newPos);
    if (newPos > 0)
      setRainbowAndPlay(
        `${orange}, ${orange}, ${orange}, ${orange}, ${orange}, ${orange}, ${orange}, ${orange}`,
        "rock1.mp3",
        "Ethan Meixsell",
        "Thor's Hammer",
        AArock1
      );
    if (newPos > 8)
      setRainbowAndPlay(
        `${orange}, ${orange}, ${orange}, ${orange}, ${orange}, ${orange}, ${orange}, ${orange}`,
        "rock2.mp3",
        "Slash Grind",
        "Infraction",
        AArock2
      );
    if (newPos > 16)
      setRainbowAndPlay(
        `${yellow}, ${yellow}, ${yellow}, ${yellow}, ${yellow}, ${yellow}, ${yellow}, ${yellow}`,
        "electronic1.mp3",
        "Elektronomia",
        "Collide",
        AAelectronic1
      );
    if (newPos > 24)
      setRainbowAndPlay(
        `${yellow}, ${yellow}, ${yellow}, ${yellow}, ${yellow}, ${yellow}, ${yellow}, ${yellow}`,
        "electronic2.mp3",
        "Jim Yosef",
        "Eclipse",
        AAelectronic2
      );
    if (newPos > 32)
      setRainbowAndPlay(
        `${green}, ${green}, ${green}, ${green}, ${green}, ${green}, ${green}, ${green}`,
        "hiphop1.mp3",
        "Drake",
        "Hotline Bling",
        AAhiphop1
      );
    if (newPos > 40)
      setRainbowAndPlay(
        `${green}, ${green}, ${green}, ${green}, ${green}, ${green}, ${green}, ${green}`,
        "hiphop2.mp3",
        "Post Malone",
        "Sunflower",
        AAhiphop2
      );
    if (newPos > 48)
      setRainbowAndPlay(
        `${blue}, ${blue}, ${blue}, ${blue}, ${blue}, ${blue}, ${blue}, ${blue}`,
        "country1.mp3",
        "The 126ers",
        "Lonesome Avenue",
        AAcountry1
      );
    if (newPos > 56)
      setRainbowAndPlay(
        `${blue}, ${blue}, ${blue}, ${blue}, ${blue}, ${blue}, ${blue}, ${blue}`,
        "country2.mp3",
        "Silent Partner",
        "Humidity",
        AAcountry2
      );
    if (newPos > 64)
      setRainbowAndPlay(
        `${violet}, ${violet}, ${violet}, ${violet}, ${violet}, ${violet}, ${violet}, ${violet}`,
        "jazz1.mp3",
        "Giorgio Di Campo",
        "Silk",
        AAjazz1
      );
    if (newPos > 72)
      setRainbowAndPlay(
        `${violet}, ${violet}, ${violet}, ${violet}, ${violet}, ${violet}, ${violet}, ${violet}`,
        "jazz2.mp3",
        "Envadi Jacobs",
        "Sweet Chicago",
        AAjazz2
      );
    if (newPos > 80)
      setRainbowAndPlay(
        `${red}, ${red}, ${orange}, ${orange}, ${red}, ${red}, ${red}, ${red}`,
        "pop1.mp3",
        "Justin Bieber",
        "Stay",
        AApop1
      );
    if (newPos > 88)
      setRainbowAndPlay(
        `${red}, ${red}, ${red}, ${red}, ${red}, ${red}, ${red}, ${red}`,
        "pop2.mp3",
        "Sigala",
        "Stay The Night",
        AApop2
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
          <p className="mySongName">{mySongName}</p>
          <p
            className="myArtistName"
            style={{ color: rainbow.substring(0, 7) }}
          >
            {myArtist}
          </p>
        </div>

        <div className="albumArtContainer">
          <img src={myAlbumArt} className="albumArt" alt="album art" />
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
