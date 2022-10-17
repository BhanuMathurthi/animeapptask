import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import EachAnimeCard from "./EachAnimeCard";

export default function EachAnimeDetails() {
  const animeId = useParams();
  console.log(animeId);

  const [singleAnimeDetail, setSingleAnimeDetail] = useState([]);

  useEffect(() => {
    fetchEachAnimeByID();
  }, []);

  const fetchEachAnimeByID = async () => {
    try {
      const response = await fetch(
        `https://api.jikan.moe/v4/anime/${animeId.id}`
      );

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log(result.data);
      setSingleAnimeDetail(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-dark py-5">
      <div className="container">
        <div className="row d-flex justify-content-center py-3">
          <div className="col-md-7">
            <EachAnimeCard singleAnimeDetail={singleAnimeDetail} />
          </div>
          <div className="col-md-5">
            <img
              src={singleAnimeDetail.images?.jpg.large_image_url}
              className="img-fluid img-thumbnail"
              style={{ width: "400px", height: "500px", borderRadius: "8px" }}
              alt={singleAnimeDetail.title}
              loading="lazy"
            />
          </div>
        </div>
        <Link className="btn btn-success my-3" to="/">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
