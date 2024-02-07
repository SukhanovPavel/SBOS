import '@/styles/globals.css'
import type {AppProps} from 'next/app';
import {Raleway, Roboto} from "next/font/google";

const raleway = Raleway({
  style: ['normal'],
  subsets: ['cyrillic', 'latin'],
  fallback: ['open-sans', 'system-ui', 'arial']
});
const roboto = Roboto({
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin', 'cyrillic'],
  fallback: ['open-sans', 'system-ui', 'arial']
});

export default function App({Component, pageProps}: AppProps) {
    return <>
      {/*<style jsx global>{`*/}
      {/*  html {*/}
      {/*    font-family: ${roboto.style.fontFamily};*/}
      {/*  }*/}

      {/*  h1, h2, h3, h4, h5, h6 {*/}
      {/*    font-family: ${raleway.style.fontFamily};*/}
      {/*    margin-bottom: 0.5em;*/}
      {/*  }*/}
      {/*`}</style>*/}
      <Component {...pageProps} />
    </>
}
