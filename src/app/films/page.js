import Navbar from "@/components/Navbar/Navbar";
import Films from "@/components/Films/Films";

import { films } from "@/data/films";

export default function FilmsPage() {
  return (
    <>
      <Navbar />

      <main>
        <Films films={films} />
      </main>
    </>
  );
}