"use client";
import { useEffect } from "react";
type Props = {
  error: Error;
  reset: () => void;
};

function Error({ error, reset }: Props) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="text-center mt-10">
      <h1>Something went wrong</h1>
      <button onClick={() => reset()} className="hover:text-amber-600">
        Try Again
      </button>
    </div>
  );
}

export default Error;
