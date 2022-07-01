import type { NextPage } from "next";
import Head from "next/head";
import ChillVibes from "../src/components/ChillVibes";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Index Page</title>
      </Head>
      <main>
        <ChillVibes />
      </main>
    </div>
  );
};

export default Home;
