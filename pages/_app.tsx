import { AppProps } from 'next/app';
import Head from 'next/head';
import { useRef } from 'react';

import '../public/fonts.css';
import './_app.css';

import BurgerMenu from '../src/components/burger-menu/burger-menu';

export default function App({ Component, pageProps }: AppProps) {
  const checkboxRef = useRef<HTMLInputElement>(null);

  const pageClick = () => {
    if (checkboxRef === null || checkboxRef.current === null) {
      return;
    }
    checkboxRef.current.checked = false;
  };

  return (
    <>
      <Head>
        <title>Maypulsutori</title>
      </Head>
      <div id="body">
        <div id="secondBody">
          <BurgerMenu checkboxRef={checkboxRef} />

          <div id="page" onClick={pageClick}>
            <div id="container">
              <Component {...pageProps} />
              
              {/*
              <div id="stupidspace"></div>
              <div className="flavortext">
                Updated as of 11/18/2023 (New Age patch)
              </div>
              */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
