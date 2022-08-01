import styles from "@/styles/Header.module.css";

const Encabezado = () => {
  return (
    <div className={styles.encabezado}>
      <h1 className={styles.margenArriba}>Movies Admin</h1>
      <h2>Find the best movie selection</h2>
    </div>
  );
};

export default Encabezado;