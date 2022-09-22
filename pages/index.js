import { useEffect, useState } from "react";
import Seo from "./Seo";
export default function Home() {
  const [movies, setMovies] = useState();

  useEffect(() => {
    (async () => {
      const { results } = await (await fetch("/api/movies")).json();
      setMovies(results);
    })();
  }, []);

  return (
    <div>
      <Seo title="Home" />
      {!movies && <h4>Loading...</h4>}
      {movies?.map((movie) => (
        <div key={movie.id}>{movie.original_title}</div>
      ))}
    </div>
  );
}
