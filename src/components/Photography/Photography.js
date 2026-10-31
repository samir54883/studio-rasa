import Link from "next/link";
import styles from "./Photography.module.css";

export default function Photography({ projects }) {
  return (
    <>
      <section className={styles.photography}>
        <div className={styles.content}>
          <h1 className={styles.title}>PHOTOGRAPHY</h1>

          <div className={styles.projectList}>
            {projects.map((project) => (
              <Link
                href={`/photography/${project.slug}`}
                className={styles.projectCard}
                key={project.slug}
                aria-label={project.title}
              >
                {project.thumbnailUrl ? (
                  <img
                    src={project.thumbnailUrl}
                    alt={project.title}
                  />
                ) : (
                  <span>{project.title}</span>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

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

        <footer className={styles.footer}>
          Website curated by @sam
        </footer>
      </section>
    </>
  );
}