import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.fondo}>
      <p>
        2022 - Cheems Movies
        <a
          className="text-white"
          href="https://cheems-balltze.com/"
          target="_blank"
        >
          here
        </a>
      </p>
    </footer>
  );
};

export default Footer;
