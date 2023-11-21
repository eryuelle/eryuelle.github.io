import { AppProps } from 'next/app';
import Head from 'next/head';
import { useRef } from 'react';

import '../public/fonts.css';
import './_app.css';

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
        <div className="burger-menu">
          <input type="checkbox" ref={checkboxRef} />
          <div className="burger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>  

          <div className="menu">
            <li><a className="menu-item" href="/">Dailies</a></li>
            <li><a className="menu-item" href="/weeklies">Weeklies</a></li>
            <li><a className="menu-item" href="/bosses">Bosses</a></li>
            <li><a className="menu-item" href="/training">Training</a></li>
            <li><a className="menu-item" href="/gear">Gear Progression</a></li>
            <li><a className="menu-item" href="/checklists">Checklists</a></li>
            <li><a className="menu-item" href="/links">External Links</a></li>
          </div>
        </div>

        <div id="page" onClick={pageClick}>
          <div id="container">
            <Component {...pageProps} />
            <div id="stupidspace"></div>
            <div className="flavortext">
              Updated as of 11/18/2023 (New Age patch)
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
