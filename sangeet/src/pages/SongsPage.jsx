import React from "react";
import { useState, useEffect } from "react";
import SearchSong from "../component/SearchSong";
import { getSongs } from "../services/songsApi";
import SongsLinst from "../component/SongsLinst";
import Player from "../component/Player";
const SongsPage = () => {
  const [allSongsFromApi, setAllSongs] = useState([]);
  const [flag, setFlag] = useState(false);
  const [currentPlayingSong, setCurrentPlayingSong] = useState();

  const loadSongs = async () => {
    // setAllSongs(await getSongs("Arijit Singh"));
    const songs = await getSongs("Arijit Singh");
    setAllSongs(songs);
  };

  useEffect(() => {
    loadSongs();
  }, []);

  useEffect(() => {
    // console.log("sjhdgfjgfjsdfg", allSongsFromApi);
  }, [allSongsFromApi]);

  const getSingerName = async (name) => {
    console.log("this is the name from UI", name);
    setAllSongs(await getSongs(name));
  };

  const togglePlayer = (flag, songObj) => {
    setCurrentPlayingSong(songObj);
    setFlag(flag);
  };
  return (
    <div>
      <h1>Welcome to Sangeet.</h1>

      {flag ? (
        <Player fn={togglePlayer} songToBePlayed={currentPlayingSong} />
      ) : (
        <>
          <SearchSong searchFn={getSingerName} />
          <SongsLinst fn={togglePlayer} allSongs={allSongsFromApi} />
        </>
      )}
    </div>
  );
};

export default SongsPage;
