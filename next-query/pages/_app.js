import "../styles/globals.css";
import React, {useState} from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate, dehydrate } from "react-query/hydration";


export const queryClient = new QueryClient();

const AppContainer = ({ Component, pageProps }) => {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        notifyOnChangeProps: 'tracked'
      },
    },
  }));

  return (
    <QueryClientProvider 
      client={queryClient}
    >
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  );
};

AppContainer.getInitialProps = async ({ Component, ctx }) => {
  /**
   * get user info
   * **/
  await queryClient.prefetchQuery("intoAPP", () => {
    return {
      id: 'stepover10',
      name: 'chan'
    };
  });

  /** 테스트 01 **/
  await queryClient.prefetchQuery("intoFavorite", () => {
    return {
      name: "🤑 into favorite",
    };
  })

  return {
    pageProps: {
      dehydratedState: dehydrate(queryClient),
      ...(Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}),
    },
  };
};

export default AppContainer;
