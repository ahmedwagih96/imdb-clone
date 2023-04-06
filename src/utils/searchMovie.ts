import { Movie } from "@/types";

export const searchMovie = async (searchQuery: string) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchQuery}&language=en-US&include_adult=false`
  );
  if (!res.ok) {
    throw new Error("Error searching movie");
  }
  const data = await res.json();
  const searchResults: Movie[] = data.results;
  return searchResults;
};
