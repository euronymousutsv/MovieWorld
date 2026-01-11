import React, { useEffect } from "react";
import MovieCard from "./MovieCard";
import { fetchFromAPI } from "../util/axios";

const Hero = () => {
  useEffect(() => {
    fetchFromAPI("Avatar");
  }, []);
  const movieStyle = {
    backgroundImage: `url(
"https://www.omdbapi.com/src/poster.jpg  "  )`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
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
              type="text"
              className="form-control"
              placeholder="Search Movie Name"
            />

            <button className="btn btn-danger" type="button" id="button-addon2">
              Button
            </button>
          </div>
          <div className="movie-card-display">
            <MovieCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
