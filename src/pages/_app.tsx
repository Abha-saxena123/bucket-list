import type { AppProps } from "next/app";
import App, { AppContext, AppInitialProps } from "next/app";
import { Layout } from "../modules/common/components/layout/layout";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Hydrate } from "react-query/hydration";
import { ReactElement, ReactNode, useMemo } from "react";
import { QUERY_CLIENT_CONFIG } from "../modules/common/utils/constants/api.constant";
import "../modules/common/utils/helpers/api.helpers";
import { NextPage } from "next";
import { getSession, SessionProvider } from "next-auth/react";

const getDefaultLayout = (page: ReactElement): ReactNode => (
  <Layout>{page}</Layout>
);

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

interface CustomAppProps {
  Component?: NextPageWithLayout;
  session: never;
}

function MyApp({ Component, pageProps, session }: AppProps & CustomAppProps) {
  const getLayout = Component.getLayout || getDefaultLayout;

  const queryClient = useMemo(() => new QueryClient(QUERY_CLIENT_CONFIG), []);
  return (
    <SessionProvider session={session} refetchInterval={60}>
      <QueryClientProvider client={queryClient}>
        {getLayout(<Component {...pageProps} />)}

        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </SessionProvider>
  );
}

MyApp.getInitialProps = async (
  appContext: AppContext
): Promise<AppInitialProps & Partial<CustomAppProps>> => {
  const appProps = await App.getInitialProps(appContext);

  const session = (await getSession({ req: appContext.ctx.req })) as never;

  return { ...appProps, session };
};

export default MyApp;
