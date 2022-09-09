import React from "react";

const MovieCard = () => {
  return (
    <>
      <div className="card-container">
        <div className="card-image"></div>
        <div className="details">
          <h2>title</h2>
          <p>year</p>
          <p className="runtime">100 minutes</p>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
