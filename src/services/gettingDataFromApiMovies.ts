import axios from "axios";

const URL = `https://api.themoviedb.org/3`;
const API_KEY = process.env.REACT_APP_API_TOKEN;
interface IGetMovieDate {
  sort: string;
  page: number;
}

export const getMovieDate = async ({ sort, page }: IGetMovieDate) => {
  const res = await axios.get(
    `${URL}/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=${sort}&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`
  );
  return res.data;
};

export const getGenresDate = async () => {
  const res = await axios.get(
    `${URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`
  );
  return res.data;
};
