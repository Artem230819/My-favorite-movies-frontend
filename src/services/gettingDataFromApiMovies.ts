import axios from "axios";

const URL = `https://api.themoviedb.org/3`;
const API_KEY = process.env.REACT_APP_API_TOKEN;
interface IGetMovieDate {
  sort: string;
  page: number;
  language: string;
  year: number
}

export const getMovieDate = async ({
  sort,
  page,
  language,
  year
}: IGetMovieDate): Promise<object> => {
  const res = await axios.get(
    `${URL}/discover/movie?api_key=${API_KEY}&language=${language}&sort_by=${sort}&include_adult=false&include_video=false&page=${page}&year=${year}&with_watch_monetization_types=flatrate`
  );
  return res.data.results;
};

export const getGenresDate = async (language: string) => {
  const res = await axios.get(
    `${URL}/genre/movie/list?api_key=${API_KEY}&language=${language}`
  );
  return res.data.genres;
};
