import styles from "../styles/Layout.module.css";
import NavHeader from "./NavHeader";

const Layout = ({ children }) => {
  return (
    <>
    <NavHeader/>
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
};

export default Layout;
