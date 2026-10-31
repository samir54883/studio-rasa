import styles from "./FilmProject.module.css";

export default function FilmProject({ film }) {
  return (
    <>
      <section className={styles.project}>
        <div className={styles.content}>
          <h1 className={styles.projectTitle}>{film.title}</h1>

          <div className={styles.video}>
            {film.videoUrl ? (
              <iframe
                src={film.videoUrl}
                title={film.title}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <span>{film.videoLabel}</span>
            )}
          </div>

          <div className={styles.idea}>
            <h2>IDEA BEHIND IT</h2>

            <p>{film.description}</p>
          </div>
        </div>
      </section>

      <section id="contact" className={styles.connect}>
        <div className={styles.content}>
          <h2 className={styles.connectTitle}>LET&apos;S CONNECT</h2>

          <div className={styles.contactBox}>
            <div className={styles.contactRow}>
              <span className={styles.icon}>☎</span>
              <div className={styles.contactField}></div>
            </div>

            <div className={styles.contactRow}>
              <span className={styles.icon}>✉</span>
              <div className={styles.contactField}></div>
            </div>

            <div className={styles.contactRow}>
              <span className={styles.icon}>◎</span>
              <div className={styles.contactField}></div>
            </div>
          </div>
        </div>

        <footer className={styles.footer}>
          Website curated by @sam
        </footer>
      </section>
    </>
  );
}