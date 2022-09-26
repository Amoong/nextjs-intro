import { useRouter } from "next/router";

export default function Detail() {
  const router = useRouter();
  console.log(router);

  return <h1>hello</h1>;
}
