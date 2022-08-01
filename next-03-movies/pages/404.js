import Layout from "@/components/Layout";
import styles from "@/styles/404.module.css";
import Link from "next/link";

const page404 = () => {
  return (
    <Layout title="404 Amnxiery ahead!!">
      <div className={styles.error}>
        <h1 className={styles.title}>Amnxiety ahead</h1>
        <p className={styles.par} >Go back cowboy</p>
        <Link href="/">To main</Link>
      </div>
    </Layout>
  );
};

export default page404;
