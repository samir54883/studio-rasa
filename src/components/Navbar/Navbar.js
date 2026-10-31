"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./Navbar.module.css";

export default function Navbar() {
  const pathname = usePathname();

  const isHome = pathname === "/";
  const isFilms = pathname.startsWith("/films");
  const isPhotography = pathname.startsWith("/photography");
  const isAbout = pathname.startsWith("/about");

  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Main navigation">

        <Link
          href="/"
          className={isHome ? styles.active : ""}
        >
          HOME
        </Link>

        <span className={isHome ? styles.activeSeparator : ""}>
          |
        </span>


        <Link
          href="/#films"
          className={isFilms ? styles.active : ""}
        >
          FILMS
        </Link>

        <span className={isFilms ? styles.activeSeparator : ""}>
          |
        </span>


        <Link
          href="/photography"
          className={isPhotography ? styles.active : ""}
        >
          PHOTOGRAPHY
        </Link>

        <span className={isPhotography ? styles.activeSeparator : ""}>
          |
        </span>


        <Link
          href="/about"
          className={isAbout ? styles.active : ""}
        >
          ABOUT
        </Link>

        <span className={isAbout ? styles.activeSeparator : ""}>
          |
        </span>


        <Link href="#contact">
          CONTACT
        </Link>

      </nav>
    </header>
  );
}