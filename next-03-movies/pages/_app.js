import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@/styles/globals.css";
import {ProvideAuthorization } from "context/ContextAuth";

function MyApp({ Component, pageProps }) {
  return (
    <ProvideAuthorization>
      <Component {...pageProps} />
    </ProvideAuthorization>
  );
}

export default MyApp;
