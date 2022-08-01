import { Container } from "@mui/material";
import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Cheems CRUD</title>
        <meta name="description" content="Cheems Crud fo doggerinos"></meta>
        <meta name="author" content="mijotron"></meta>
        <meta
          name="keywords"
          content="cheems, nextjs, crud, js,  react, firebase"
        ></meta>
      </Head>
      <Container maxWidth="sm">
        <h1 align="center">Cheems Crud!!!</h1>
        <Component {...pageProps} />
      </Container>
    </>
  );
}

export default MyApp;
