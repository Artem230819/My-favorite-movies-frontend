import React, { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { LogOut } from "services/LogOutUser";
import { LocalizationSelect } from "common/components/LocalizationSelect";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import { HomeUserBox, HomeWrapper, ToolBox } from "./css";

import { Genres } from "common/components/Genres";
import { MoviesList } from "common/components/MoviesList";
import IMoviesData from "types/IMoviesData";
import { SwitchViewMovies } from "common/components/SwitchViewMovies";

interface Props {}

export const HomePage: FC<Props> = () => {
  const history = useHistory();
  const user = localStorage.getItem("username");

  const { t } = useTranslation();

  const [movies, setMovies] = useState<IMoviesData[]>([]);

  const [switchViewMovies, setSwitchViewMovies] = useState<boolean>(true);

  const viewDrawHandleMovie = (btn: boolean) => {
    setSwitchViewMovies(btn);
  };
  const redirectToSearchMovies = () => {
    history.push("/searchMovies");
  };

  useEffect(() => {
    const moviesData: IMoviesData[] = JSON.parse(
      localStorage.getItem("movies") || "[]"
    );
    setMovies(moviesData);
  }, []);

  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
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
    <HomeWrapper>
      <LocalizationSelect />
      <h1>{t("homePage.title")}</h1>
      <HomeUserBox>
        <span>
          {t("homePage.greetings")}: <b>{user}</b>
        </span>
        <button
          onClick={(): void => {
            LogOut(history);
          }}
        >
          {t("homePage.logOut")}
        </button>
      </HomeUserBox>
      <Genres />
      <ToolBox>
        <button onClick={redirectToSearchMovies}>
          {t("homePage.addMovie")} <ControlPointIcon />
        </button>
        <SwitchViewMovies
          switchViewMovies={switchViewMovies}
          viewDrawHandleMovie={viewDrawHandleMovie}
        />
      </ToolBox>
      <MoviesList
        toggleHandleMovie={toggleHandleMovieCompleted}
        movies={movies}
        removeFavoritesMovie={removeFavoritesMovie}
        switchViewMovies={switchViewMovies}
      />
    </HomeWrapper>
  );
};
