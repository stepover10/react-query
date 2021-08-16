import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createCache , SWRConfig } from "swr";
import axios from "axios";

console.log(createCache );


const globalFetcher = async (api) => {
  const res = await axios.get(`http://localhost:8000${api}`);
  return res;
};

function AppContainer({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        fetcher: globalFetcher,
        refreshInterval: false,
      }}
    >
      <Component {...pageProps} />
    </SWRConfig>
  );
}

AppContainer.getInitialProps = async () => {
  /**
   * get user info
   * **/

   

  return {
    pageProps: {}
  }
};

export default AppContainer;
