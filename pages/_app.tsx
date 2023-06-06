import Navbar from "../components/Navbar";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "../components/Footer";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className=" overflow-x-hidden">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
