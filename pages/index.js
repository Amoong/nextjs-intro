import Seo from "./Seo";
export default function Home({ results }) {
  return (
    <div>
      <Seo title="Home" />
      {results?.map((movie) => (
        <div key={movie.id}>{movie.original_title}</div>
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
