import "../styles/globals.css";
import React, {useState} from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate, dehydrate } from "react-query/hydration";

const AppContainer = ({ Component, pageProps }) => {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  }));

console.log(pageProps);

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
  const queryClient = new QueryClient();
  /**
   * get user info
   * **/
  await queryClient.prefetchQuery("intoAPP", () => {
    return {
      id: "😆 stepover10",
      name: "😀 front-end team",
    };
  });

  await queryClient.prefetchQuery("intoFavorite", () => {
    return {
      name: "🤑 into favorite",
    };
  });

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
