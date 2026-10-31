import { notFound } from "next/navigation";

import Navbar from "@/components/Navbar/Navbar";
import FilmProject from "@/components/FilmProject/FilmProject";

import { films } from "@/data/films";

export function generateStaticParams() {
  return films.map((film) => ({
    slug: film.slug,
  }));
}

export default async function FilmProjectPage({ params }) {
  const { slug } = await params;

  const film = films.find((film) => film.slug === slug);

  if (!film) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main>
        <FilmProject film={film} />
      </main>
    </>
  );
}