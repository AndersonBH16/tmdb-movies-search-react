import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { get } from "../utils/httpClient";
import { MovieCard } from "./MovieCard";
import styles from "./MoviesGrid.module.css"

// los componentes de react, son funciones puras, no tienen efectos secudndarios, no se llaman directamente a apis dentro de componentes, en su lugar se usan hooks
export function MoviesGrid() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    get("/discover/movie").then((data) => {
      setMovies(data.results);
    });
  }, []);

  //listado de dependencias nulo

  return (
    <ul className={styles.moviesGrid}>
      {
        movies.map(movie => {
          return (
              <MovieCard key={movie.id} movie={movie} />
          );
        })
      }
    </ul>
  );
}