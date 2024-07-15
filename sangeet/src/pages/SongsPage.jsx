import React from "react";
import { useState, useEffect } from "react";
import SearchSong from "../component/SearchSong";
import { getSongs } from "../services/songsApi";
import SongsLinst from "../component/SongsLinst";
const SongsPage = () => {
  const [allSongsFromApi, setAllSongs] = useState([]);

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
  return (
    <div>
      <h1>Welcome to Sangeet.</h1>
      <SearchSong searchFn={getSingerName} />
      <SongsLinst allSongs={allSongsFromApi} />
    </div>
  );
};

export default SongsPage;
