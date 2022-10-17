import React from "react";

export default function EachAnimeCard({ singleAnimeDetail }) {
  return (
    <div>
      <h2 className="text-warning mb-4">
        <strong>{singleAnimeDetail?.title}</strong>
      </h2>
      <div className="d-flex ">
        <p className="text-primary ">
          Rank:&nbsp;
          <span className="text-white">{singleAnimeDetail?.rank}</span>
        </p>
        <p className="text-primary mx-3">
          Popularity:&nbsp;
          <span className="text-white">{singleAnimeDetail?.popularity}</span>
        </p>
      </div>
      <p className="text-white">{singleAnimeDetail?.synopsis} </p>
      <p className="text-primary">
        Duration:&nbsp;
        <span className="text-white">{singleAnimeDetail?.duration}</span>
      </p>
      <p className="text-primary">
        Rating:&nbsp;
        <span className="text-white">{singleAnimeDetail?.rating}</span>
      </p>
      <p className="text-primary">
        Trailer: &nbsp;
        <a
          className="text-white"
          href={singleAnimeDetail.trailer?.url}
          target="_blank"
          rel="noreferrer"
        >
          {singleAnimeDetail.trailer?.url}
        </a>
      </p>

      <p className="text-primary">
        Aired:&nbsp;
        <span className="text-white">
          {singleAnimeDetail?.aired?.prop?.from.day}/
          {singleAnimeDetail?.aired?.prop?.from.month}/
          {singleAnimeDetail?.aired?.prop?.from.year} to &nbsp;
          {singleAnimeDetail?.aired?.prop?.to.day}/
          {singleAnimeDetail?.aired?.prop?.to.month}/
          {singleAnimeDetail?.aired?.prop?.to.year}
        </span>
      </p>
      <p className="text-primary">
        Status:&nbsp;
        <span className="text-white">{singleAnimeDetail?.status}</span>
      </p>
    </div>
  );
}
