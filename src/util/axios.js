import axios from "axios";
const APIKEY = import.meta.env.VITE_API_KEY;

const fetchFromAPI = async (searchStr) => {
  try {
    const url = `http://www.omdbapi.com/?apikey=${APIKEY}&s=${searchStr}`;
    const response = await axios.get(url);
    console.log(APIKEY);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
export { fetchFromAPI };
