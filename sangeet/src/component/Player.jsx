import React from "react";

const Player = ({ fn, songToBePlayed }) => {
  return (
    <div>
      <button className="btn btn-primary"
        onClick={() => {
          fn(false, null);
        }}
      >
        Go Back
      </button>
      <div className="col-md-2 col-4">
        <img
          src={songToBePlayed.artworkUrl100}
          alt="album_image"
          className="img-fluid rounded"
        />
        <div className="col-md-6 col-8">
        <h4 className="mb-1">{songToBePlayed.trackName}</h4>
        <p className="mb-0">{songToBePlayed.artistName} </p>
      </div>
      </div>
      {/* <audio src={songToBePlayed.previewUrl} type="audio/mp4"></audio> */}
      <audio controls>
        <source src={songToBePlayed.previewUrl} type="audio/mp4" />
      </audio>
    </div>
  );
};

export default Player;
