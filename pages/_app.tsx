import { AppProps } from 'next/app';

import '../public/fonts.css';
import './_app.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div id="body">
        <div id={"container"}>
          <Component {...pageProps} />
        </div>
      </div>
    </>
  )
}
