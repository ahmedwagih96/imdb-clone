import { Result } from "@/types";

type Props = {
  results: Result[];
};

function Results({ results }: Props) {
  return (
    <div>
      {results.map((result: Result) => (
        <div key={result.id}>{result.original_title}</div>
      ))}
    </div>
  );
}

export default Results;
