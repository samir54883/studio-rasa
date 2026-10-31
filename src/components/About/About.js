import styles from "./About.module.css";
import ContactIcons from "@/components/ContactIcons/ContactIcons";

export default function About() {
  return (
    <>
      <section className={styles.about}>
        <div className={styles.content}>
          <h1 className={styles.title}>ABOUT</h1>

          <div className={styles.aboutGrid}>
            <div className={styles.aboutText}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>

              <p>
                Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
                augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
              </p>
            </div>

            <div className={styles.profile}>
              <div className={styles.profileImage}></div>

              <p className={styles.profileCaption}>
                Sagar S, Founder@Studio Rasa
              </p>
            </div>
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