import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
export default function AnimeCard({ data }) {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 py-3 anime">
      <Link
        style={{ textDecoration: "none", color: "#000" }}
        to={`/anime/${data.mal_id}`}
      >
        <div className="text-center">
          <h6 style={{ color: "#112a60", fontSize: "18px" }} className="mb-3">
            <strong>{data.title}</strong>
          </h6>
          <img
            className="img-fluid img-thumbnail"
            style={{ width: "300px", height: "250px", borderRadius: "15px" }}
            loading="lazy"
            src={data.images.webp.large_image_url}
            alt={data.title}
          />
          <p className="pt-2">
            <FaStar /> {data.score}
          </p>
        </div>
      </Link>
    </div>
  );
}
