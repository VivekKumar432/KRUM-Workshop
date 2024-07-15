// const axios = require("axios");

// const getSongs = async (searchName) => {
//   const iTunes_URL = `https://itunes.apple.com/search?term=${searchName}&country=in`;

//   const api_response = await  axios.get(iTunes_URL);

//   if (api_response) {
//     console.log("this is the res from ITunes", api_response.data["results"]);
//   }
//   return api_response.data["results"];
// };

// module.exports = getSongs;

import axios from "axios";

export async function getSongs(searchName) {
  const iTunes_URL = `https://itunes.apple.com/search?term=${searchName}&country=in`;

  const api_response = await axios.get(iTunes_URL);

  if (api_response) {
    console.log("this is the res from ITunes", api_response.data["results"]);
  }
  return api_response.data["results"];
}
