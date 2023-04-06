import Results from "@/components/Results";
import { Fetch } from "@/types";
import { Movie } from "@/types";
const API_KEY = process.env.API_KEY;

type HomePageTypes = {
  searchParams: {
    genre: string;
  };
};
export default async function Home({ searchParams }: HomePageTypes) {
  const genre: string = searchParams.genre || Fetch.Trending;
  const res = await fetch(
    `https://api.themoviedb.org/3/${
      genre === Fetch.TopRated ? "movie/top_rated" : "trending/all/week"
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch Data");
  }

  const data = await res.json();
  const movies: Movie[] = data.results;
  return (
    <div>
      <Results movies={movies} />
    </div>
  );
}
