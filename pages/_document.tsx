import { Html, Head, Main, NextScript } from "next/document";
import { GA_ID } from "../src/lib/gtag";

const MyDocument = () => {
  return (
    <Html lang="ja-JP">
      <Head>
         {/* Google Analytics */}
         {GA_ID && (
             <>
               <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
               <script
                 dangerouslySetInnerHTML={{
                   __html: `
                   window.dataLayer = window.dataLayer || [];
                   function gtag(){dataLayer.push(arguments);}
                   gtag('js', new Date());
                   gtag('config', '${GA_ID}', {
                     page_path: window.location.pathname,
                   });`,
                 }}
               />
             </>
           )}

        <meta name="Motivation App" content="MyApp" />
        <link
          href="https://fonts.googleapis.com/css2?family=DotGothic16&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
