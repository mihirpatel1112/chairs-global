// pages/_app.js
import "@/styles/globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import ParallaxWrapper from "./_components/ParallaxWrapper";

export default function App({ Component, pageProps }) {
  return (
    <ParallaxWrapper>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ParallaxWrapper>
  );
}