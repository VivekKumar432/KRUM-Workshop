import React from "react";
import { useRef } from "react";

const SearchSong = ({ searchFn }) => {
  const singer = useRef();
  return (
    <div className="mb-4">
      <label htmlFor="singeName" className="form-label">
        Singer Name
      </label>
      <div className="input-group">
        <input
          ref={singer}
          type="text"
          name="singer"
          className="form-control"
          placeholder="Please enter the name of the Singer"
        ></input>
        <button
        className="btn btn-success"
        onClick={() => {
          searchFn(singer.current.value);
        }}
      >
        Search Now
      </button>
      </div>
    </div>
  );
};

export default SearchSong;
