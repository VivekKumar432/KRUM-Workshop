import React from "react";
import Song from "./Song";

const SongsLinst = ({allSongs}) => {
  console.log("This is the songs list pageee", allSongs);
  return (
    <div>
      {allSongs.map((currentSong, curentIndex) => (
        <Song song={currentSong} key={curentIndex} />
      ))}
    </div>
  );
};

export default SongsLinst;
