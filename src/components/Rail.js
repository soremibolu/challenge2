import React from "react";
import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";

const Rail = ({ movies }) => {
  return (
    <>
      <h3 className="rail-header">Search results:</h3>
      <div className="rail">
        {movies.length ? (
          movies.map((movie) => (
            <Link key={movie.id} to={`/info/${movie.id}`}>
              <MovieCard
                title={movie.title}
                runtime={movie.runtime}
                year={movie.year}
                posterURL={movie.posterUrl}
              />
            </Link>
          ))
        ) : (
          <p className="no-results">No results found</p>
        )}
      </div>
    </>
  );
};

export default Rail;
