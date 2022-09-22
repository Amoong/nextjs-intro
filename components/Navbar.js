import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  return (
    <nav>
      <img width="100px" src="/vercel.svg" />
      <Link href="/">
        <a className={router.pathname === "/" ? "active" : ""}>Home</a>
      </Link>
      <Link href="/about">
        <a className={router.pathname === "/about" ? "active" : ""}>About</a>
      </Link>
      <style jsx>{`
        nav {
          background-color: teal;
        }
        a {
          text-decoration: none;
        }
        .active {
          color: pink;
        }
      `}</style>
    </nav>
  );
}
