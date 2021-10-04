import React, { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { getGenresDate } from "services/gettingDataFromApiMovies";
import { GenreList, GenreWrapper } from "./css";
import IGenres from "./Interface/IGenres";

export const Genres: FC = () => {
  const [genres, setGenres] = useState<IGenres[]>([]);
  const { t } = useTranslation();

  useEffect(() => {
    const genresData = JSON.parse(
      localStorage.getItem("genres") || "[]"
    ) as IGenres[];
    setGenres(genresData);
  }, []);

  useEffect(() => {
    getGenresDate(t("homePage.inquiry")).then((res) => {
      let result: IGenres[] = res;
      genres.forEach((value: IGenres, key: number) => {
        if (value.choice) {
          result[key].choice = value.choice;
        }
      });
      localStorage.setItem("genres", JSON.stringify(result));
      setGenres(result);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [t]);

  useEffect(() => {
    localStorage.setItem("genres", JSON.stringify(genres));
  }, [genres]);

  const handleGenreFetch = (id: number) => {
    setGenres((prev) =>
      prev.map((genres) => {
        if (genres.id === id) {
          genres.choice = !genres.choice;
        }
        return genres;
      })
    );
  };

  return (
    <GenreWrapper>
      {genres.map((value) => (
        <GenreList
          theme={value}
          onClick={() => handleGenreFetch(value.id)}
          key={value.id}
        >
          {value.name}
        </GenreList>
      ))}
    </GenreWrapper>
  );
};
