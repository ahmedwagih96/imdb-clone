"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

type Props = {};

function SearchBox({}: Props) {
  const [query, setQuery] = useState<string>("");
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!query) return;
    router.push(`/search/${query}`);
  };
  return (
    <form
      className="flex max-w-6xl mx-auto justify-between items-center px-5 "
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search keywords..."
        className="w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent flex-1"
      />
      <button
        disabled={!query}
        type="submit"
        className="text-amber-600 disabled:text-gray-400"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBox;
