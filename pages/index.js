import { useState } from "react";
import Navbar from "../components/Navbar";

export default function Home() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <Navbar />
      <h1>Home {counter}</h1>
      <button onClick={() => setCounter((prev) => prev + 1)}>Plus</button>
    </div>
  );
}
