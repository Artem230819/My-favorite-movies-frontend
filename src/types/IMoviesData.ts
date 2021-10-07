export default interface IMoviesData {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  completed?: boolean;
  disable?: boolean;
}
