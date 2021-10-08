import React, { FC } from "react";
import { MovieCard, MoviesWrapper } from "./css";
import DeleteIcon from "@mui/icons-material/Delete";
import { useTranslation } from "react-i18next";
import { POSTER_PATH } from "constants/posterPath";
import IMoviesData from "types/IMoviesData";

interface Props {
  movies: IMoviesData[];
  removeFavoritesMovie?: (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    id: number
  ) => void;
  toggleHandleMovie: (id: number) => void;
  switchViewMovies: boolean;
}

export const MoviesList: FC<Props> = ({
  movies,
  removeFavoritesMovie,
  toggleHandleMovie,
  switchViewMovies,
}) => {
  const { t } = useTranslation();
  const pagePath = window.location.pathname.split("/");
  const PageName = pagePath[pagePath.length - 1]
    ? pagePath[pagePath.length - 1]
    : "homePage";

  return (
    <MoviesWrapper theme={{ switchViewMovies }}>
      {movies.map((movie: IMoviesData) => (
        <MovieCard theme={{ ...movie, switchViewMovies }} key={movie.id}>
          <label>
            {removeFavoritesMovie && (
              <i onClick={(event) => removeFavoritesMovie(event, movie.id)}>
                <DeleteIcon />
              </i>
            )}
            <img src={POSTER_PATH + movie.poster_path} alt={movie.title} />
            <span>{movie.title}</span>
            {switchViewMovies ? <p>{movie.overview}</p> : ""}
            <div>
              <div>
                <span>{t("page."+PageName + ".add")}</span>
                <input
                  type="checkbox"
                  checked={movie.completed || movie.disable || false}
                  disabled={movie.disable || false}
                  onChange={() => toggleHandleMovie(movie.id)}
                />
              </div>
            </div>
          </label>
        </MovieCard>
      ))}
    </MoviesWrapper>
  );
};
