import "./App.css";
import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

// API key: 9b891e2d

const API_URL = "http://www.omdbapi.com?apikey=9b891e2d";

const movie1 = {
  Title: "Ironman Triathlon World Championship",
  Year: "2005",
  imdbID: "tt1129377",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BNTNlNjAyMTUtMzQwZC00NjM4LTk5NzYtMDU1NTQ3MTZiZTZlXkEyXkFqcGdeQXVyMjcxMjE1OTM@._V1_SX300.jpg",
};

const App = () => {
  const [movies, setMovies] = useState([]);
  cosnt[(searchTerm, setSearchTerm)] = useState();

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const date = await response.json();

    setMovies(date.Search);
  };

  useEffect(() => {
    searchMovies("spiderman");
  }, []);

  return (
    <div className="app">
      <h1>MoviePlanet</h1>
      <div className="search">
        <input
          placeholder="Search for movies..."
          value="spiderman"
          onChange={() => {}}
        ></input>
        <button onClick={() => {}}>Search</button>
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => {
            <MovieCard movie={movie} />;
          })}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
