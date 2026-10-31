import Link from "next/link";
import styles from "./Films.module.css";

export default function Films({ films }) {
  return (
    <section className={styles.films}>
      <div className={styles.content}>
        <h1 className={styles.title}>FILMS</h1>

        <div className={styles.filmList}>
          {films.map((film) => (
            <Link
              href={`/films/${film.slug}`}
              className={styles.filmCard}
              key={film.slug}
            >
              <span>{film.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}