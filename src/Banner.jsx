import React, { useEffect } from "react";
import "./Banner.css";
import axios from "./axios";
import requests from "./Request";

function Banner() {
  const [movie, setMovie] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      const results = request.data.results.filter(
        (movie) => movie.backdrop_path && movie.name
      );
      const rand_index = Math.floor(Math.random() * results.length - 1);
      setMovie(results[rand_index]);
      return request;
    }

    fetchData();
  }, []);

  console.log(movie);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <header
      className="Banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${
          movie?.backdrop_path
            ? "https://image.tmdb.org/t/p/original/" + movie.backdrop_path
            : ""
        })`,
        backgroundPosition: "center center",
      }}
    >
      <div className="Banner__content">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name || "Untitled"}
        </h1>
        <div className="banner__buttons">
          <button className="banner__btn">Play</button>
          <button className="banner__btn">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className="banner__fadeBottom" />
    </header>
  );
}

export default Banner;
