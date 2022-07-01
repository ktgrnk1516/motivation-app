// import type { NextPage } from "next";
import Head from "next/head";
import UlzzangGL from "../src/components/UlzzangGL";
import UlzzangBY from "../src/components/UlzzangBY";
import MuscleBY from "../src/components/MuscleBY";
import ChillVibes from "../src/components/ChillVibes";
import { useRouter } from "next/router";

const OtherPage = () => {
  //routerのid
  const router = useRouter();
  const { id } = router.query;

  if (id === "UlzzangGL") {
    return (
      <div>
        <Head>
          <title>Index Page</title>
        </Head>
        <main>
          <UlzzangGL />
        </main>
      </div>
    );
  } else if (id === "UlzzangBY") {
    return (
      <div>
        <Head>
          <title>Index Page</title>
        </Head>
        <main>
          <UlzzangBY />
        </main>
      </div>
    );
  } else if (id === "MuscleBY") {
    return (
      <div>
        <Head>
          <title>Index Page</title>
        </Head>
        <main>
          <MuscleBY />
        </main>
      </div>
    );
  } else if (id === "ChillVibes") {
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
  }
};

export default OtherPage;
