import { Genres } from "common/components/Genres";
import IGenres from "common/components/Genres/Interface/IGenres";
import { LocalizationSelect } from "common/components/LocalizationSelect";
import { MoviesList } from "common/components/MoviesList";
import { SwitchViewMovies } from "common/components/SwitchViewMovies";
import React, { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { getMovieDate } from "services/gettingDataFromApiMovies";
import IMoviesData from "types/IMoviesData";
import { YearValue } from "./components/YearValue";

interface Props {}
interface IFilter {
  genres: string;
  voteAverage: string;
  year: string;
}

const FAVORITE_MOVIE_DATA: IMoviesData[] = JSON.parse(
  localStorage.getItem("movies") || "[]"
);

export const SearchMoviesPage: FC<Props> = () => {
  const [filter, setFilter] = useState<IFilter>({
    genres: "",
    voteAverage: "10",
    year: "2021",
  });
  const [movies, setMovies] = useState<IMoviesData[]>([]);
  const [switchViewMovies, setSwitchViewMovies] = useState<boolean>(true);

  const { t } = useTranslation();

  const getMoviesGenre = (genresData: IGenres[]) => {
    const result = genresData
      .filter((value) => {
        if (value.choice) {
          return value.id;
        }
        return "";
      })
      .map(({ id }) => {
        return id;
      });
    setFilter({ ...filter, genres: result.join() });
  };

  const handleVoteAverage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter({ ...filter, voteAverage: event.target.value });
  };

  const handleYearValue = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter({ ...filter, year: event.target.value });
  };

  useEffect((): void => {
    getMovieDate({
      language: t("common.inquiry"),
      year: filter.year,
      vote_average: filter.voteAverage,
      genres: filter.genres,
    }).then((res) => {
      let result: IMoviesData[] = [];
      res.map((value: IMoviesData) =>
        result.push({
          id: value.id,
          title: value.title,
          poster_path: value.poster_path,
          overview: value.overview,
        })
      );
      result.map((movie) => {
        return FAVORITE_MOVIE_DATA.forEach((FavoriteMovie) => {
          if (movie.id === FavoriteMovie.id) {
            movie.disable = true;
          }
        });
      });
      setMovies(result);
    });
  }, [filter, t]);

  const toggleHandleMovieCompleted = (id: number) => {
    setMovies((prev) =>
      prev.map((movie) => {
        if (movie.id === id) {
          FAVORITE_MOVIE_DATA.push(movie);
          localStorage.setItem("movies", JSON.stringify(FAVORITE_MOVIE_DATA));
          movie.disable = true;
        }
        return movie;
      })
    );
  };

  const viewDrawHandleMovie = (btn: boolean) => {
    setSwitchViewMovies(btn);
  };

  return (
    <div>
      <LocalizationSelect />
      <h1>{t("page.searchMovies.title")}</h1>
      <Genres getMoviesGenre={getMoviesGenre} />
      <div>{t("page.searchMovies.popularity")}</div>
      <input
        type="range"
        min="1"
        max="10"
        value={filter.voteAverage}
        onChange={handleVoteAverage}
      />
      <div>{t("page.searchMovies.release")} </div>
      <YearValue onChange={handleYearValue} value={filter.year} />
      <SwitchViewMovies
        switchViewMovies={switchViewMovies}
        viewDrawHandleMovie={viewDrawHandleMovie}
      />
      <MoviesList
        movies={movies}
        toggleHandleMovie={toggleHandleMovieCompleted}
        switchViewMovies={switchViewMovies}
      />
    </div>
  );
};
