import Footer from '@/components/Footer'
import Header from '@/components/Header'
import '@/styles/globals.css'
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 900,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (<>
    <Header />
    <Component {...pageProps} />
    <Footer />
  </>
  )
}
