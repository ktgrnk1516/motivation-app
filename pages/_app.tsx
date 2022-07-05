import "../styles/globals.css";
import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import Layout from "../src/components/layout";

import { usePageView } from "../src/hooks/usePageView";
import GoogleAnalytics from "../src/components/GoogleAnalytics";

function MyApp({ Component, pageProps }: AppProps) {
  usePageView();
  return (
    <>
      <GoogleAnalytics />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
