import React, { useState } from "react";
import SearchPanel from "../components/SearchPanel";
import Rail from "../components/Rail";
import Data from "../data/data.json";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [year, setYear] = useState("");

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

  const handleChange = (e) => {
    switch (e.target.id) {
      case "title":
        setTitle(e.target.value);
        break;
      case "director":
        setDirector(e.target.value);
        break;
      case "year":
        setYear(e.target.value);
        break;
    }
  };

  const resetFields = () => {
    setTitle("");
    setDirector("");
    setYear("");
  };

  const handleSearch = (searchTerms) => {
    setMovies(filterData(Data.movies, searchTerms));
  };

  const handleClick = (e) => {
    e.preventDefault();
    const searchTerms = {
      title: title ? title : "",
      director: director ? director : "",
      year: year ? year : "",
    };
    handleSearch(searchTerms);
    resetFields();
  };

  return (
    <>
      <div className="container">
        <div className="search">
          <SearchPanel handleChange={handleChange} handleClick={handleClick} />
        </div>
        <Rail movies={movies} />
      </div>
    </>
  );
};

export default Home;
