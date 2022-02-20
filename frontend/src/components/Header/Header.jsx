import styles from "./Header.module.css";
import { Link } from "wouter";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a className={styles.link}>
          <h1 className={styles.title}>Sentimentify</h1>
        </a>
      </Link>
      <Link href="/add"><a className={styles.add}>Add your playlist</a></Link>
    </header>
  );
};

export default Header;
