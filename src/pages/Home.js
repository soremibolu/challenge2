import React, { useState } from "react";
import SearchPanel from "../components/SearchPanel";
import Rail from "../components/Rail";
import Data from "../data/data.json";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState({
    title: "",
    director: "",
    year: "",
  });

  const filterData = (MovieData, searchData) => {
    const filteredTitles = MovieData.filter(
      (movie) => movie.title === searchData.title
    );
    const filteredDirectors = MovieData.filter(
      (movie) => movie.director === searchData.director
    );
    const filteredYears = MovieData.filter(
      (movie) => movie.year === searchData.year
    );

    const moviesFiltered = filteredTitles.concat(
      filteredDirectors,
      filteredYears
    );

    console.log(moviesFiltered);
  };

  const handleSearch = (title, director, year) => {
    setSearch({
      title: title ? title : "",
      director: director ? director : "",
      year: year ? year : "",
    });
    filterData(Data.movies, search);
  };
  //console.log(MovieData.movies);

  //all
  //random
  //search
  return (
    <>
      <div className="container">
        <div className="search">
          <SearchPanel handleSearch={handleSearch} />
        </div>
        <Rail search={search} />
      </div>
    </>
  );
};

export default Home;
