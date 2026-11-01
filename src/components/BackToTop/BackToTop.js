import styles from "./BackToTop.module.css";

export default function BackToTop() {
  return (
    <a
      href="#top"
      className={styles.button}
      aria-label="Back to top"
      title="Back to top"
    >
      ↑
    </a>
  );
}