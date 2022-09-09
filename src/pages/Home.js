import React, { useState } from "react";
import SearchPanel from "../components/SearchPanel";
import Rail from "../components/Rail";
import Data from "../data/data.json";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState({});

  const filterData = (MovieData, searchData) => {
    const filteredTitles = MovieData.filter(
      (movie) => movie.title.toLowerCase() === searchData.title.toLowerCase()
    );
    const filteredDirectors = MovieData.filter(
      (movie) =>
        movie.director.toLowerCase() === searchData.director.toLowerCase()
    );
    const filteredYears = MovieData.filter(
      (movie) => movie.year === searchData.year
    );

    const moviesFiltered = filteredTitles.concat(
      filteredDirectors,
      filteredYears
    );
    return moviesFiltered;
  };

  const handleSearch = (title, director, year) => {
    setSearch({
      title: title ? title : "",
      director: director ? director : "",
      year: year ? year : "",
    });
    setMovies(filterData(Data.movies, search));
  };

  //all
  //random
  //search
  return (
    <>
      <div className="container">
        <div className="search">
          <SearchPanel handleSearch={handleSearch} />
        </div>
        <Rail search={search} movies={movies} />
      </div>
    </>
  );
};

export default Home;
