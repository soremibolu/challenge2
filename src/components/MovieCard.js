import React from "react";

const MovieCard = ({ title, runtime, year, posterURL }) => {
  return (
    <>
      <div className="card-container">
        <div
          className="card-image"
          style={{ backgroundImage: `url(${posterURL})` }}
        ></div>
        <div className="details">
          <h2>{title}</h2>
          <p>{year}</p>
          <p className="runtime">{runtime} minutes</p>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
