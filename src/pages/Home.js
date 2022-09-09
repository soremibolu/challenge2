import React from "react";
import SearchPanel from "../components/SearchPanel";
import Rail from "../components/Rail";

const Home = () => {
  //all
  //random
  //search
  return (
    <>
      <div className="container">
        <div className="search">
          <SearchPanel />
        </div>
        <Rail />
      </div>
    </>
  );
};

export default Home;
