import React from "react";
import Song from "./Song";

const SongsLinst = ({ fn, allSongs }) => {
  console.log("This is the songs list pageee", allSongs);
  return (
    <div>
      {allSongs.map((currentSong, curentIndex) => (
        <Song fn={fn} song={currentSong} key={curentIndex} />
      ))}
    </div>
  );
};

export default SongsLinst;
