import React, { useEffect, useState, useRef } from "react";
import MovieCard from "./MovieCard";
import { fetchFromAPI, randomStr } from "../util/axios";

const Hero = () => {
  const [searchedMovie, setsearchedMovie] = useState({});
  const [bgImg, setbgImg] = useState();
  const shouldFetch = useRef(true);
  const searchRef = useRef("");
  useEffect(() => {
    if (shouldFetch.current) {
      fetchMovie(randomStr());
      shouldFetch.current = false;
    }
  }, []);
  const fetchMovie = async (str) => {
    const movie = await fetchFromAPI(str);
    setsearchedMovie(movie);
    setbgImg(movie.Poster);
  };
  const movieStyle = {
    backgroundImage: `url(${bgImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  const handleOnMovieSearch = () => {
    const str = searchRef.current.value;
    fetchMovie(str);
    searchRef.current.value = "";
  };
  return (
    <div>
      <nav className=" py-3 text-danger fixed-top">
        <h2 className="container">MovieWorld</h2>
      </nav>
      <div
        className="hero d-flex justify-content-center align-items-center text-white"
        style={movieStyle}
      >
        <div className="hero-content">
          <div className="form-center">
            <div className="text-center">
              <h1>Search Millions of Movies</h1>
              <p>Find About the movie more in details before watching them.</p>
            </div>
          </div>

          <div className="input-group my-5">
            <input
              ref={searchRef}
              type="text"
              className="form-control"
              placeholder="Search Movie Name"
              aria-label="Search Movie Name"
            />

            <button
              className="btn btn-danger"
              type="button"
              id="button-addon2"
              onClick={handleOnMovieSearch}
            >
              Search
            </button>
          </div>
          <div className="movie-card-display">
            <MovieCard searchedMovie={searchedMovie} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
