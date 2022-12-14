import React from "react";
import Button from "./Button";

const SearchPanel = ({ handleChange, handleClick }) => {
  return (
    <>
      <div className="search-panel">
        <form onSubmit={handleClick}>
          <input
            id="title"
            className="input"
            type="text"
            placeholder="Title..."
            onChange={handleChange}
          />
          <input
            id="director"
            className="input"
            type="text"
            placeholder="Director..."
            onChange={handleChange}
          />
          <input
            id="year"
            className="input"
            type="number"
            maxLength={4}
            placeholder="Year..."
            onChange={handleChange}
          />

          <Button name="Search" />
        </form>
      </div>
    </>
  );
};

export default SearchPanel;
