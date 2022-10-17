import React, { useEffect, useState } from "react";
import Draggable from "react-draggable"; // The default
import { Link } from "react-router-dom";
import AnimePagination from "./AnimePagination";
import FilterAnimes from "./Filter/FilterAnimes";
import SearchAnime from "./Search/SearchAnimes";
import AnimeCard from "./TotalAnimeCards";

export default function Home() {
  const [everyAnime, setEveryAnime] = useState([]);

  const [filterBasedOnGenre, setFilterBasedOnGenre] = useState([]);

  const [loading, setLoading] = useState(true);

  const [searchInput, setSearchInput] = useState("");

  const [filteredResults, setFilteredResults] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);

  const [animesPerPage] = useState(8);

  // Get current Animes
  const indexOfLastAnime = currentPage * animesPerPage;
  const indexOfFirstAnime = indexOfLastAnime - animesPerPage;
  const currentAnimes = everyAnime.slice(indexOfFirstAnime, indexOfLastAnime);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    getAllAnimes();
  }, []);

  const getAllAnimes = async () => {
    try {
      const response = await fetch(`https://api.jikan.moe/v4/anime`);

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log(result.data);
      setEveryAnime(result.data);
      setFilterBasedOnGenre(result.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <h2 className="text-center my-5" style={{ color: "#112a60" }}>
        <strong>Anime List</strong>
      </h2>
      <SearchAnime
        everyAnime={everyAnime}
        setFilteredResults={setFilteredResults}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />

      <FilterAnimes
        everyAnime={everyAnime}
        filterBasedOnGenre={filterBasedOnGenre}
        setFilterBasedOnGenre={setFilterBasedOnGenre}
      />

      <Link to="/dragandropanimes" className="btn btn-success">
        Drag And Drop Animes
      </Link>

      <div className="row d-flex justify-content-center align-items-center">
        {loading ? (
          <h2 className="text-success fw-bold text-center">Loading...</h2>
        ) : (
          <>
            {searchInput.length > 1
              ? filteredResults.map((data) => (
                  <AnimeCard key={data.mal_id} data={data} />
                ))
              : filterBasedOnGenre.map((data) => (
                  <AnimeCard key={data.mal_id} data={data} />
                ))}

            <AnimePagination
              animesPerPage={animesPerPage}
              totalAnimes={everyAnime.length}
              paginate={paginate}
            />
          </>
        )}
      </div>
    </div>
  );
}
