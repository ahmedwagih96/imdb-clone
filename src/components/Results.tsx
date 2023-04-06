import { Movie } from "@/types";
import MovieCard from "@/components/MovieCard";

type Props = {
  movies: Movie[];
};

function Results({ movies }: Props) {
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
      {movies.map((movie: Movie) => (
        <MovieCard key={movie.id} movie = {movie}/>
      ))}
    </div>
  );
}

export default Results;
