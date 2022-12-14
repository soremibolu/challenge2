import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Data from "../data/data.json";

const Info = () => {
  const { id } = useParams();
  const movieDetailed = Data.movies.filter((movie) => movie.id == id);

  return (
    <>
      <div className="movie-detail-container">
        <div
          className="movie-detail-image"
          style={{ backgroundImage: `url(${movieDetailed[0].posterUrl})` }}
        ></div>
        <div className="movie-detail-info">
          <span>
            <h3>{movieDetailed[0].title} </h3>
            <p>{movieDetailed[0].year}</p>
          </span>
          <p>{movieDetailed[0].runtime} minutes</p>
          <p>{movieDetailed[0].plot}</p>
          <p>Director: {movieDetailed[0].director}</p>
          <p>Starring: {movieDetailed[0].actors}</p>
          <p>{movieDetailed[0].genres.map((genre) => genre + " ")}</p>
        </div>
      </div>
    </>
  );
};

export default Info;
