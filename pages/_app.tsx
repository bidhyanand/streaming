import "../styles/globals.css";
import "../styles/video.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { CookiesProvider } from "react-cookie";
import Script from "next/script";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <CookiesProvider>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BDSKXQGXGQ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-BDSKXQGXGQ');
          `}
        </Script>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </CookiesProvider>
    </ChakraProvider>
  );
}

export default MyApp;
