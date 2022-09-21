import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  return (
    <nav>
      <Link href="/">
        <a
          style={{ color: router.pathname === "/" ? "pink" : "green" }}
          className="hello"
        >
          Home
        </a>
      </Link>
      <Link href="/about">
        <a style={{ color: router.pathname === "/about" ? "pink" : "green" }}>
          About
        </a>
      </Link>
    </nav>
  );
}
