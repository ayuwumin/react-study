"use client";
import { useState } from "react";
import { VideoPlayer } from "../components/VideoPlayer";

const Page = () => {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="">
      <div className="border border-white p-3 mb-4">
        <p className="text-2xl text-blue-400 mb-3">
          {playing ? "RODANDO" : "PAUSADO"}
        </p>
        <button
          className="bg-blue-400 rounded-md p-3"
          onClick={() => setPlaying(!playing)}
        >
          Play/Pause
        </button>

        <VideoPlayer
          src="https://www.youtube.com/watch?v=p5fnHWznTBQ&ab_channel=I-WatchEverythingOnRepeat"
          isPlaying={playing}
        />
      </div>
    </div>
  );
};

export default Page;
