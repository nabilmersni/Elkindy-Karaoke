import { useEffect, useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { Spinner as Spinner2 } from "@material-tailwind/react";
import Slider from "@mui/material/Slider";

import mineKaraokeService from "../services/MineKaraokeService";

function MusicLyricsPlayer({ selectedSong }) {
  const [audioUrl, setAudioUrl] = useState("");
  const [lyrics, setLyrics] = useState();
  const [lyricLine, setLyricLine] = useState();
  const [isLoadingAudio, setIsisLoadingAudio] = useState(true);
  const [lyricsAdjust, setLyricsAdjust] = useState(0);

  const getAudio = async () => {
    setIsisLoadingAudio(true);
    setLyricLine("");
    try {
      const videoUrl = await mineKaraokeService.getYoutubeVideo(
        selectedSong?.title,
        selectedSong?.subtitle
      );

      const audioUrl = await mineKaraokeService.getAudioFromYtUrl(videoUrl);
      setAudioUrl(audioUrl);

      const lyrics = await mineKaraokeService.getLyrics(
        selectedSong?.title,
        selectedSong?.subtitle
      );
      setLyrics(lyrics);
    } catch (error) {
      console.log(error);
    }
    setIsisLoadingAudio(false);
  };

  useEffect(() => {
    getAudio();
  }, []);

  //
  const handleSliderChange = (event, newValue) => {
    setLyricsAdjust(newValue);
  };

  const syncTheLyrics = (e) => {
    const currentTime = e.target.currentTime; // Get the current playback time
    const currentTimestamp =
      Math.floor(currentTime * 1000) + 600 + lyricsAdjust; // Convert to milliseconds

    for (const element of lyrics) {
      let line = element.trim();
      let [timestamp, text] = line.split("]");
      let [minuteStr, secondStr] = timestamp.substr(1).split(":");
      let minute = parseFloat(minuteStr);
      let second = parseFloat(secondStr);
      if (isNaN(minute) || isNaN(second)) continue;

      let milliseconds = (minute * 60 + second) * 1000;

      if (milliseconds <= currentTimestamp) {
        setLyricLine(text.trim());
      }
    }
  };
  return (
    <div className="h-full">
      {/* <h1 className="text-[1.7rem] text-white ">{selectedSong?.title}</h1> */}

      {isLoadingAudio ? (
        <div className="w-full mt-[4rem] flex justify-center items-center">
          <Spinner2 width={"2.5rem"} height={"2.5rem"} color="blue-gray" />
        </div>
      ) : (
        <div className="flex flex-col h-full justify-between items-center pt-6">
          <div className="relative h-[70%] rounded-[2rem] border-white border-[.2rem] p-[.5rem] ">
            <img
              className="w-full h-full object-cover rounded-[1.3rem] filter brightness-[.3] grayscale"
              src={selectedSong?.images?.coverart}
              alt=""
            />

            <div className="absolute z-10 top-0 w-full h-full flex justify-center items-center text-white  ">
              <span
                className="text-[2.1rem] font-bold text-center px-[1.3rem] "
                style={{
                  textShadow: "0 0 9px black",
                  marginLeft: "-1.1rem",
                }}
              >
                {lyricLine}
              </span>
            </div>
            <div className="absolute z-10 bottom-[1.5rem] mx-auto flex flex-col justify-center items-center text-white w-full px-[3rem] ml-[-1.1rem] ">
              <p className="text-[1.1rem] ">adjust lyrics sync</p>
              <Slider
                aria-label="Volume"
                defaultValue={0}
                min={-20000}
                max={20000}
                step={200}
                valueLabelDisplay="auto"
                // marks
                value={lyricsAdjust}
                onChange={handleSliderChange}
                sx={{
                  color: "#fff",
                  "& .MuiSlider-marks": {
                    width: 18,
                    height: 18,
                  },
                  "& .MuiSlider-track": {
                    border: "none",
                  },
                  "& .MuiSlider-thumb": {
                    width: 18,
                    height: 18,
                    backgroundColor: "#fff",
                    "&::before": {
                      boxShadow: "0 4px 8px rgba(0,0,0,0.4)",
                    },
                    "&:hover, &.Mui-focusVisible, &.Mui-active": {
                      boxShadow: "none",
                    },
                  },
                }}
              />
            </div>
          </div>
          <div className="w-full mb-[3rem]">
            <AudioPlayer
              autoPlay
              src={audioUrl}
              onPlay={(e) => console.log("onPlay")}
              onListen={syncTheLyrics}
              className="rounded-[1.5rem] px-[2rem] py-[1rem] "
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default MusicLyricsPlayer;
