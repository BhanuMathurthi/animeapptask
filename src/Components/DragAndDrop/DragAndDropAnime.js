import React, { useEffect, useRef, useState } from "react";
import Draggable from "react-draggable";
import { Link } from "react-router-dom";

export default function DragAndDropAnimes() {
  const [filteredResults, setFilteredResults] = useState([]);

  const [positions, setPositions] = useState({});

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    localStorage.setItem(`positions_anime`, JSON.stringify(positions));
  }, [positions]);

  const handleStop = (e, data) => {
    setX(data.x);
    setY(data.y);
  };

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
      setFilteredResults(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-5" style={{ color: "#112a60" }}>
        <strong>Anime List</strong>
      </h2>

      <div className="row d-flex justify-content-center align-items-center">
        {filteredResults.map((data) => {
          return (
            <Draggable defaultPosition={{ x: x, y: y }} onStop={handleStop}>
              <div className="col-lg-2 col-md-4 col-sm-6 my-3">
                <div className="text-center">
                  <h6
                    style={{ color: "#112a60", fontSize: "18px" }}
                    className="mb-3"
                  >
                    <strong>{data.title}</strong>
                  </h6>
                  <img
                    className="img-fluid img-thumbnail"
                    style={{
                      width: "200px",
                      height: "150px",
                      borderRadius: "10px",
                    }}
                    loading="lazy"
                    src={data.images.webp.large_image_url}
                    alt={data.title}
                  />
                </div>
              </div>
            </Draggable>
          );
        })}

        <Link to="/">Back To Home</Link>
      </div>
    </div>
  );
}
