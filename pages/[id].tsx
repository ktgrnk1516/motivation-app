import type { NextPage } from "next";
import Head from "next/head";
import UlzzangGL from "../src/components/UlzzangGL";
import { useRouter } from "next/router";

const OtherPage: NextPage = () => {

  //routerのid
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <Head>
        <title>Index Page</title>
      </Head>
      <main  >
        <UlzzangGL />
      </main>
    </div>
  );
};

export default OtherPage;
