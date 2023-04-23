import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import "@/styles/Homepage.css";
<<<<<<< HEAD
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

=======
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";


export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
>>>>>>> feature/signup
  return <Component {...pageProps} />;
}

export default MyApp;
