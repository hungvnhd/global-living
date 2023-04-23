import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import "@/styles/Homepage.css";
import "@/styles/CoreProduct.css";
import "@/styles/Contact.css";
import "@/styles/BusinessPartners.css";
import "@/styles/AboutUs.css";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		require("bootstrap/dist/js/bootstrap.bundle.min.js");
	}, []);

	return <Component {...pageProps} />;
}

export default MyApp;
