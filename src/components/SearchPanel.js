import React, { useState } from "react";
import Button from "./Button";

const SearchPanel = ({ handleSearch }) => {
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [year, setYear] = useState("");

  const resetFields = () => {
    setTitle("");
    setDirector("");
    setYear("");
  };

  return (
    <>
      <div className="search-panel">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch(title, director, year);
            resetFields();
          }}
        >
          <input
            className="input"
            type="text"
            placeholder="Title..."
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <input
            className="input"
            v
            type="text"
            placeholder="Director..."
            onChange={(e) => setDirector(e.target.value)}
            value={director}
          />
          <input
            className="input"
            type="text"
            placeholder="Year..."
            onChange={(e) => setYear(e.target.value)}
            value={year}
          />

          <Button name="Search" />
        </form>
      </div>
    </>
  );
};

export default SearchPanel;
