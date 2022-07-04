import { useEffect, useState } from "react";
import MovieList from "./components/MovieList.jsx";
import Starships from "./components/StarShips";
import "./App.css";


const FILMS_API = "https://swapi.dev/api/films/"


function App() {
  const [showMovies, setShowMovies] = useState(true)
  const [starshipIdx, setStarshipIdx] = useState(0)
  const [loading, setloading] = useState(true);
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    fetch(FILMS_API)
    .then(response => response.json())
    .then(filmsJson => {
      setMoviesList(filmsJson["results"]);
      setloading(false);
    });
    // setMoviesList(MOVIES_LIST);
    // setloading(false);
  }, [])

  return (
    <div className="content-box" id="content-box">
      {
        loading ? (
          <p>Loading...</p>
        ):
        (
          <>
          {
            showMovies ? (
              <MovieList setShowMovies={setShowMovies} setStarshipIdx={setStarshipIdx} moviesList={moviesList}></MovieList>
            ):
            (
              <Starships setShowMovies={setShowMovies} movie={moviesList[starshipIdx]} ></Starships>
            )
          }
          </>
        )
      }

    </div>
  );
}

export default App;
