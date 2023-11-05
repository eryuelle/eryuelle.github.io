import { AppProps } from 'next/app';
import { useState } from 'react';

import '../public/fonts.css';
import './_app.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div id="body">
        <div className="burger-menu">
          <input type="checkbox" />
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
        
        <div id={"container"}>
          <Component {...pageProps} />
        </div>
      </div>
    </>
  )
}
