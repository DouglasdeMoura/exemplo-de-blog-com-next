import Link from 'next/link';

const Header = () => {
  return (
    <header>
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
