import Link from "next/link";
import styles from "@/styles/NavBar.module.css";
import Search from "./Search";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <div className={styles.logo}></div>

        <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link href="/">
              <a className="nav-link">
                Cheems Home <span className="sr-only"></span>
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/about">
              <a className="nav-link">About Us</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/movies">
              <a className="nav-link">Movies List</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/movies/new">
              <a className="nav-link">New Movie</a>
            </Link>
          </li>
          <li className="nav-item">
            <Search />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
