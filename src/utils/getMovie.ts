import { Movie } from "@/types";

export const getMovie = async (movieId: string) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
  );
  const movie: Movie = await res.json();
  return movie;
};
