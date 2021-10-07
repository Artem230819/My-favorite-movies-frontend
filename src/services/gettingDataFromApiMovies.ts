import axios from "axios";

const URL = `https://api.themoviedb.org/3`;
const API_KEY = process.env.REACT_APP_API_TOKEN;
interface IGetMovieDate {
  language: string;
  year: string;
  vote_average: string;
  genres: string;
}

export const getMovieDate = async ({
  language,
  year,
  vote_average,
  genres,
}: IGetMovieDate) => {
  const res = await axios.get(
    `${URL}/discover/movie?api_key=${API_KEY}&language=${language}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=${year}&vote_average.lte=${vote_average}&with_genres=${genres}&with_watch_monetization_types=flatrate`
  );
  return res.data.results;
};

export const getGenresDate = async (language: string) => {
  const res = await axios.get(
    `${URL}/genre/movie/list?api_key=${API_KEY}&language=${language}`
  );
  return res.data.genres;
};
