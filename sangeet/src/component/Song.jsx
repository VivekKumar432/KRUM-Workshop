import React from "react";

const Song = (song) => {
    console.log("tusdfksdbfksf", song);
  return (
    <div className="row">
      <div className="col-4">
        <img src={song.song.artworkUrl100} alt="" />
      </div>
      <div className="col-4">
        {song.song.artistName} {song.song.trackName}
      </div>
      <div className="col-4">
        <button className="btn btn-danger" >Play Song</button>
      </div>
    </div>
  );
};

export default Song;
