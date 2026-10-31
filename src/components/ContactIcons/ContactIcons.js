import {
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa";

import styles from "./ContactIcons.module.css";

export default function ContactIcons() {
  return (
    <>
      <div className={styles.contactRow}>
        <span className={styles.icon}>
          <FaPhoneAlt />
        </span>

        <div className={styles.contactField}></div>
      </div>

      <div className={styles.contactRow}>
        <span className={styles.icon}>
          <FaEnvelope />
        </span>

        <div className={styles.contactField}></div>
      </div>

      <div className={styles.contactRow}>
        <span className={`${styles.icon} ${styles.instagramIcon}`}>
          <FaInstagram />
        </span>

        <div className={styles.contactField}></div>
      </div>
    </>
  );
}