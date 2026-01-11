import axios from "axios";
const APIKEY = import.meta.env.VITE_API_KEY;
const randomStr = () => {
  const char = "abcdefghijklmnopqrstuvwxyz";
  const randomStr = char[Math.floor(Math.random() * char.length)];
  return randomStr;
};
const fetchFromAPI = async (searchStr) => {
  try {
    const url = `http://www.omdbapi.com/?apikey=${APIKEY}&t=${searchStr}`;
    const response = await axios.get(url);
    console.log(APIKEY);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export { fetchFromAPI, randomStr };
