import { AppProps } from 'next/app';
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
      <div id="body">
        <div className="burger-menu">
          <input type="checkbox" ref={checkboxRef} />
          <div className="burger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>  

          <div className="menu">
            <li><a className="menu-item" href="/">Home</a></li>
            <li><a className="menu-item" href="/bosses">Bosses</a></li>
          </div>
        </div>

        <div id="page" onClick={pageClick}>
          <div id="container">
            <Component {...pageProps} />
          </div>
        </div>
      </div>
    </>
  )
}
