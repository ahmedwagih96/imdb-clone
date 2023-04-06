import Results from "@/components/Results";
import { Movie } from "@/types";
import { searchMovie } from "@/utils/searchMovie";

type Props = {
  params: {
    searchQuery: string;
  };
};

async function SearchQuery({ params }: Props) {
  const searchQuery: string = params.searchQuery;
  const searchResults: Movie[] = await searchMovie(searchQuery);
  return (
    <div>
      {searchResults && searchResults.length === 0 ? (
        <h1 className="text-center pt-6">No results found</h1>
      ) : (
        <Results movies={searchResults} />
      )}
    </div>
  );
}

export default SearchQuery;
