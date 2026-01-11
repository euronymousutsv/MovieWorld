import React from "react";

const MovieCard = ({ searchedMovie }) => {
  console.log(searchedMovie);
  const { Poster, Title, imdbRating, Plot } = searchedMovie;
  // const Poster = "https://www.omdbapi.com/src/poster.jpg ";
  return (
    <div className="container">
      <div className="row border rounded text-dark p-3 movie-card-item ">
        <div className="col-md">
          <img src={Poster} alt="" />
        </div>
        <div className="col-md">
          <h3>{Title}</h3>
          <p>{imdbRating}</p>
          <p>{Plot?.slice(0, 70)}...</p>
          <div className="d-flex justify-content-between ">
            <button className="btn btn-warning">drama</button>
            <button className="btn btn-info">Action</button>
          </div>
          <div className="d-grid mt-3">
            <button className="btn btn-danger">Action</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
