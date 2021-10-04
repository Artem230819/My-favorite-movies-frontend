import React, { FC, useEffect, useState } from "react";
import { MovieCard, MoviesWrapper } from "./css";
import DeleteIcon from "@mui/icons-material/Delete";
import IFeaturedMovies from "./Interface/IFeaturedMovies";
import { useTranslation } from "react-i18next";
import { POSTER_PATH } from "constants/posterPath";

interface Props {
  switchViewMovies: boolean;
}

export const FeaturedMoviesList: FC<Props> = ({ switchViewMovies }) => {
  const [movies, setMovies] = useState<IFeaturedMovies[]>([]);
  const { t } = useTranslation();

  useEffect(() => {
    const moviesData: IFeaturedMovies[] = JSON.parse(
      localStorage.getItem("movies") || "[]"
    );
    setMovies(moviesData);
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
        <MovieCard theme={{ ...movie, switchViewMovies }} key={movie.id}>
          <label>
            <i onClick={(event) => removeFavoritesMovie(event, movie.id)}>
              <DeleteIcon />
            </i>
            <img src={POSTER_PATH + movie.poster_path} alt={movie.title} />
            <span>{movie.title}</span>
            {switchViewMovies ? <p>{movie.overview}</p> : ""}
            <div>
              <div>
                <span>{t("homePage.addViewed")}</span>
                <input
                  type="checkbox"
                  checked={movie.completed}
                  onChange={() => toggleHandleMovieCompleted(movie.id)}
                />
              </div>
            </div>
          </label>
        </MovieCard>
      ))}
    </MoviesWrapper>
  );
};
