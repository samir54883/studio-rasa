import Link from "next/link";
import styles from "./Home.module.css";

const films = [
  "film-1",
  "film-2",
  "film-3",
  "film-4",
  "film-5",
  "film-6",
];

export default function Home() {
  return (
    <>
      {/* ENTRY VIDEO */}
      <section className={styles.hero}>
        <span>STUDIO RASA - ENTRY VID</span>
      </section>

      {/* ABOUT */}
      <section className={styles.about}>
        <div className={styles.content}>
          <h2>ABOUT</h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <strong> Ut enim ad minim veniam,</strong> quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
      </section>

      {/* FILMS */}
      <section id="films" className={styles.films}>
        <div className={styles.content}>
          <h2>FILMS</h2>

          <div className={styles.filmList}>
            {films.map((film, index) => (
              <Link
                href={`/films/${film}`}
                className={styles.filmCard}
                key={film}
                aria-label={`Film ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CONNECT */}
      <section id="contact" className={styles.connect}>
        <div className={styles.content}>
          <h2>LET&apos;S CONNECT</h2>

          <div className={styles.contactBox}>
            <div className={styles.contactRow}>
              <span>☎</span>
              <div />
            </div>

            <div className={styles.contactRow}>
              <span>✉</span>
              <div />
            </div>

            <div className={styles.contactRow}>
              <span>◎</span>
              <div />
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        Website curated by @sam
      </footer>
    </>
  );
}