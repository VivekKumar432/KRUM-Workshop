import React from "react";

const Song = ({ fn, song }) => {
  const openPlayer = () => {
    fn(true, song);
  };
  return (
    <div className="row align-items-center p-2 border">
      <div className="col-md-2 col-4">
        <img
          src={song.artworkUrl100}
          alt="album_image"
          className="img-fluid rounded"
        />
      </div>
      <div className="col-md-6 col-8">
        <h4 className="mb-1">{song.trackName}</h4>
        <p className="mb-0">{song.artistName} </p>
      </div>
      <div className="col-4">
        <button className="btn btn-danger" onClick={openPlayer}>
          Play Song
        </button>
      </div>
    </div>
  );
};

export default Song;
