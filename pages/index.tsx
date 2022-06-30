import type { NextPage } from "next";
import Head from "next/head";
import PostCard from "../src/components/PostCard";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Index Page</title>
      </Head>
      <main  >
        <PostCard />
      </main>
    </div>
  );
};

export default Home;
