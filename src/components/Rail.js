import React from "react";
import MovieCard from "../components/MovieCard";

const Rail = () => {
  return (
    <>
      <h3 className="rail-header">
        Search results for title:'title' ,director:'someone else' and year:
        '1988'
      </h3>
      <div className="rail">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </>
  );
};

export default Rail;
