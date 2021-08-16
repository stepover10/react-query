import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useSWR, SWRConfig } from "swr";
import axios from "axios";

const globalFetcher = async (api) => {
  const res = await axios.get(`http://localhost:8000${api}`);
  return res;
};

function AppContainer({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        fetcher: globalFetcher,
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
