import Link from "next/link";
import { useRouter } from "next/router";
import Seo from "./Seo";
export default function Home({ results }) {
  const router = useRouter();
  const onClick = (id, title) => {
    router.push(`movies/${title}/${id}`);
  };
  return (
    <div>
      <Seo title="Home" />
      {results?.map((movie) => (
        <div
          onClick={() => onClick(movie.id, movie.original_title)}
          key={movie.id}
        >
          <img
            width="300px"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          />
          <Link href={`/movies/${movie.original_title}/${movie.id}`}>
            <a>
              <span>{movie.original_title}</span>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  let { results } = await (
    await fetch("http://localhost:3000/api/movies")
  ).json();

  return {
    props: {
      results,
    },
  };
}
