import React from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchAnime({
  everyAnime,
  setFilteredResults,
  searchInput,
  setSearchInput,
}) {
  const handleChange = (e) => {
    setSearchInput(e.target.value);

    if (searchInput !== "") {
      const filteredAnime = everyAnime.filter((user) => {
        return user.title.toLowerCase().includes(searchInput.toLowerCase());
      });

      setFilteredResults(filteredAnime);
    } else {
      setFilteredResults(everyAnime);
    }
  };
  return (
    <div className="d-flex justify-content-center">
      <div className="input-group mb-5 search" style={{ width: "500px" }}>
        <input
          onChange={handleChange}
          autoComplete="off"
          type="text"
          className="form-control"
          placeholder="Search Anime..."
          id="inp"
        />
        <button type="button" className="btn btn-dark">
          <FaSearch />
        </button>
      </div>
    </div>
  );
}
