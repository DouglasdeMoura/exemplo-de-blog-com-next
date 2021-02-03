import Link from 'next/link';
import styles from '../styles/Header.module.css'

const Header = () => {
  return (
    <header className={styles.navbar}>
      <h1>Blog Next.js</h1>

      <nav>
        <ul>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
