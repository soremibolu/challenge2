import React from "react";
import SearchPanel from "../components/SearchPanel";

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
        <div className="rail"></div>
      </div>
    </>
  );
};

export default Home;
