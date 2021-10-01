import React, { FC, useEffect, useState } from "react";
import { MovieList, MoviesWrapper } from "./css";
import DeleteIcon from "@mui/icons-material/Delete";
import IFeaturedMovies from "./Interface/IFeaturedMovies";

interface Props {
  switchViewMovies: boolean;
}

export const FeaturedMoviesList: FC<Props> = ({ switchViewMovies }) => {
  const [movies, setMovies] = useState<IFeaturedMovies[]>([]);
  useEffect(() => {
    const moviesData: IFeaturedMovies[] = JSON.parse(
      localStorage.getItem("movies") || "[]"
    );
    if (moviesData.length > 0) {
      setMovies(moviesData);
    }
  }, []);

  useEffect(() => {
    if (movies.length > 0) {
      localStorage.setItem("movies", JSON.stringify(movies));
    }
  }, [movies]);

  const removeFavoritesMovie = (event: React.MouseEvent, id: number) => {
    event.preventDefault();
    setMovies((prev) => prev.filter((movie) => movie.id !== id));
  };

  const toggleHandleMovieCompleted = (id: number) => {
    setMovies((prev) =>
      prev.map((movie) => {
        if (movie.id === id) {
          movie.completed = !movie.completed;
        }
        return movie;
      })
    );
  };
  return (
    <MoviesWrapper theme={{ switchViewMovies }}>
      {movies.map((movie: IFeaturedMovies) => (
        <li key={movie.id}>
          <MovieList theme={{ ...movie, switchViewMovies }}>
            <img
              src={
                "https://www.themoviedb.org/t/p/w440_and_h660_face" +
                movie.poster_path
              }
              alt={movie.title}
            />
            <span>{movie.title}</span>
            {switchViewMovies ? <p>{movie.overview}</p> : ""}
            <div>
              <div>
                <span>Добавить в просмотренные</span>
                <input
                  type="checkbox"
                  checked={movie.completed}
                  onChange={() => toggleHandleMovieCompleted(movie.id)}
                />
              </div>
              <i onClick={(event) => removeFavoritesMovie(event, movie.id)}>
                <DeleteIcon />
              </i>
            </div>
          </MovieList>
        </li>
      ))}
    </MoviesWrapper>
  );
};
