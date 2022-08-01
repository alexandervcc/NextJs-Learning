import Head from "next/head";
import NavBar from "./NavBar";
import Encabezado from "./Encabezado";
import { useRouter } from "next/router";
import Footer from "./Footer";

const Layout = ({ title, description, author, keywords, children }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="author" content={author} />
        <meta name="keywords" content={keywords} />
      </Head>
      <NavBar />
      {router.pathname === "/" && <Encabezado />}
      <div className="container">{children}</div>
      <Footer/>
    </>
  );
};

export default Layout;

Layout.defaultProps = {
  title: "Cheems Movies",
  description: "Cheems Store for Movies!!",
  author: "Cheemsito",
  keywords: "cheems, movies, doge",
};
