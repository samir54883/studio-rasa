import styles from "./PhotographyProject.module.css";
import ContactIcons from "@/components/ContactIcons/ContactIcons";

function Photo({ src, className = "" }) {
  if (src) {
    return (
      <div className={`${styles.photo} ${className}`}>
        <img src={src} alt="" />
      </div>
    );
  }

  return <div className={`${styles.photo} ${className}`} />;
}

export default function PhotographyProject({ project }) {
  const images = project.images || [];

  return (
    <>
      <section className={styles.project}>
        <div className={styles.content}>
          <h1 className={styles.title}>{project.title}</h1>

          <div className={styles.gallery}>
            {/* ROW 1 - Large landscape */}
            <Photo src={images[0]} className={styles.large} />

            {/* ROW 2 - Three vertical images */}
            <div className={styles.threeColumns}>
              <Photo src={images[1]} />
              <Photo src={images[2]} />
              <Photo src={images[3]} />
            </div>

            {/* ROW 3 - Wide + narrow */}
            <div className={styles.twoColumnsWideLeft}>
              <Photo src={images[4]} />
              <Photo src={images[5]} />
            </div>

            {/* ROW 4 - Large landscape */}
            <Photo src={images[6]} className={styles.large} />

            {/* ROW 5 - Narrow + wide */}
            <div className={styles.twoColumnsWideRight}>
              <Photo src={images[7]} />
              <Photo src={images[8]} />
            </div>

            {/* ROW 6 - Three images */}
            <div className={styles.threeColumns}>
              <Photo src={images[9]} />
              <Photo src={images[10]} />
              <Photo src={images[11]} />
            </div>
          </div>

          <div className={styles.description}>
            <h2>BRIEF DESCRIPTION</h2>

            {Array.isArray(project.description) ? (
              project.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))
            ) : (
              <p>{project.description}</p>
            )}
          </div>
        </div>
      </section>

      <section id="contact" className={styles.connect}>
        <div className={styles.content}>
          <h2 className={styles.connectTitle}>LET&apos;S CONNECT</h2>

          <div className={styles.contactBox}>
           <ContactIcons />
          </div>
        </div>

        <footer className={styles.footer}>
          Website curated by @sam
        </footer>
      </section>
    </>
  );
}