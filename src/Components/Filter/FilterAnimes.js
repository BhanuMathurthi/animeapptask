import React, { useEffect, useState } from "react";

export default function FilterAnimes({ everyAnime, setFilterBasedOnGenre }) {
  const [activeGenre, setActiveGenre] = useState(0);

  useEffect(() => {
    if (activeGenre === 0) {
      setFilterBasedOnGenre(everyAnime);
      return;
    }
    const filteredanime = everyAnime.filter((animee) =>
      animee.genres.map((genre) => genre.mal_id).includes(activeGenre)
    );

    setFilterBasedOnGenre(filteredanime);
  }, [activeGenre]);

  return (
    <>
      <div className="d-flex flex-wrap mb-5">
        <button
          id="filtered"
          onClick={() => setActiveGenre(0)}
          style={{ borderRadius: "10px" }}
          className={
            activeGenre === 0 ? "btn btn-dark" : "btn btn-outline-dark"
          }
        >
          All
        </button>
        &nbsp;
        <button
          id="filtered"
          onClick={() => setActiveGenre(7)}
          style={{ borderRadius: "10px" }}
          className={
            activeGenre === 7 ? "btn btn-dark" : "btn btn-outline-dark"
          }
        >
          Mystery
        </button>
        &nbsp;
        <button
          id="filtered"
          onClick={() => setActiveGenre(37)}
          style={{ borderRadius: "10px" }}
          className={
            activeGenre === 37 ? "btn btn-dark" : "btn btn-outline-dark"
          }
        >
          Supernatural
        </button>
        &nbsp;
        <button
          id="filtered"
          onClick={() => setActiveGenre(1)}
          style={{ borderRadius: "10px" }}
          className={
            activeGenre === 1 ? "btn btn-dark" : "btn btn-outline-dark"
          }
        >
          Action
        </button>
        &nbsp;
        <button
          id="filtered"
          onClick={() => setActiveGenre(8)}
          style={{ borderRadius: "10px" }}
          className={
            activeGenre === 8 ? "btn btn-dark" : "btn btn-outline-dark"
          }
        >
          Drama
        </button>
        &nbsp;
      </div>
    </>
  );
}
