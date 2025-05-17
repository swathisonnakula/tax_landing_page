import type { AppProps } from "next/app";
import "../styles/common.scss";
import "../styles/globals.scss";
// import "../node_modules/aos/dist/aos.css";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init();
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
