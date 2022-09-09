import React, { useState } from "react";
import SearchPanel from "../components/SearchPanel";
import Rail from "../components/Rail";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState({});

  const handleSearch = (title, director, year) => {
    setSearch({
      title: title ? title : "",
      director: director ? director : "",
      year: year ? year : "",
    });
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
        <Rail search={search} />
      </div>
    </>
  );
};

export default Home;
