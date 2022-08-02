import Link from "next/link";
import styles from "@/styles/NavBar.module.css";
import Search from "./Search";
import ContextAuth from "../context/ContextAuth";
import { useContext } from "react";

const NavBar = () => {
  const { user, logOut } = useContext(ContextAuth);

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
            <Search />
          </li>
        </ul>

        <ul className="navbar-nav me-auto mb-2">
          {user ? (
            <>
              <li className="nav-item">
                <Link href="/movies/new">
                  <a className="nav-link">New Movie</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/accounts/profile">
                  <a className="nav-link">Profile</a>
                </Link>
              </li>
              <li className="nav-item">
                <button onClick={() => logOut()} className="btn btn-secondary">
                  <i className="bi bi-box-arrow-right" />
                  Log-Out
                </button>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link href="/accounts/login">
                  <a className="btn btn-success">
                    <i className="bi bi-box-arrow-in-right" />
                    Log-In
                  </a>
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
