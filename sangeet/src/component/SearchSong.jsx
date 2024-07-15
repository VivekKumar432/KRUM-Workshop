import React from "react";
import { useRef } from "react";

const SearchSong = ({ searchFn }) => {
  const singer = useRef();
  return (
    <div>
      <label>Singer Name</label>
      <input
        ref={singer}
        type="text"
        name="singer"
        className="form-control"
        placeholder="Please enter the name of the Singer"
        // onChange={(inputEmail) => setEmail(inputEmail.target.value)}
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
  );
};

export default SearchSong;
