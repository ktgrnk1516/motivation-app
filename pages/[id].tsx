// import type { NextPage } from "next";
import Head from "next/head";
import Beauty from "../src/components/Beauty";
import Cool from "../src/components/Cool";
import Life from "../src/components/Life";
import { useRouter } from "next/router";
import Meigen1 from "../public/Meigen1.json";
import Meigen2 from "../public/Meigen2.json";
import Meigen3 from "../public/Meigen3.json";
import { useCallback, useEffect, useState } from "react";
import { GetStaticProps } from "next";
import { ParsedUrlQuery } from "node:querystring";

const OtherPage = ({ data }: any) => {
  // console.log(data);

  //routerのid
  const router = useRouter();
  const { id } = router.query;

  const meigen1: any = Meigen1.map((_) => _);
  const meigen2: any = Meigen2.map((_) => _);
  const meigen3: any = Meigen3.map((_) => _);

  const [random1, setRandom1] = useState<number>(0);
  const [random2, setRandom2] = useState<number>(0);
  const [random3, setRandom3] = useState<number>(0);

  //乱数の整数
  const getRandom = useCallback(
    (Meigen: any) => {
      if (Meigen.length === 0) {
        return;
      } else {
        //Meigenのlength
        const len = Meigen.length;
        //ランダムな数値を作る
        // const min = 0;
        // const max = len;
        return Math.floor(Math.random() * len);
      }
    },
    [Meigen1.length, Meigen2.length, Meigen3.length]
  );

  useEffect(() => {
    const randoms1: any = getRandom(Meigen1);
    setRandom1(randoms1);
    const randoms2: any = getRandom(Meigen2);
    setRandom2(randoms2);
    const randoms3: any = getRandom(Meigen3);
    setRandom3(randoms3);
  }, []);

  if (id === "Beauty") {
    return (
      <div>
        <Head>
          <title>【{id}】Motivation 😎</title>
        </Head>
        <main className="main">
          <Beauty data={data} />
        </main>
        <div className="fixed flex flex-col items-center justify-around font-fancy tracking-widest   card">
          {/* <div className="flex  items-center meigen">{meigen[10].meigen}</div> */}
          <div className="text-sm meigen">{meigen2[random2].meigen}</div>
          <div className="text-xs text-center  auth">
            -{meigen2[random2].auth}-
          </div>
        </div>
      </div>
    );
  } else if (id === "Cool") {
    return (
      <div>
        <Head>
          <title>【{id}】Motivation 😎</title>
        </Head>
        <main className="main">
          <Cool data={data} />
        </main>
        <div className="fixed flex flex-col items-center justify-around font-fancy tracking-widest   card">
          {/* <div className="flex  items-center meigen">{meigen[10].meigen}</div> */}
          <div className="text-sm meigen">{meigen3[random3].meigen}</div>
          <div className="text-xs text-center  auth">
            -{meigen3[random3].auth}-
          </div>
        </div>
      </div>
    );
  } else if (id === "Life") {
    return (
      <div>
        <Head>
          <title>【{id}】Motivation 😎 </title>
        </Head>
        <main className="main">
          <Life data={data} />
        </main>
        <div className="fixed flex flex-col items-center justify-around font-fancy tracking-widest   card">
          {/* <div className="flex  items-center meigen">{meigen[10].meigen}</div> */}
          <div className="text-sm meigen">{meigen1[random1].meigen}</div>
          <div className="text-xs text-center  auth">
            -{meigen1[random1].auth}-
          </div>
        </div>
      </div>
    );
  }
};

export default OtherPage;

// 1. Paramsの型を定義し、ParsedUrlQueryをextendsする
interface Params extends ParsedUrlQuery {
  data: any;
}


//URLによってjsonを取得し分ける
export const getStaticProps: GetStaticProps<Params> = async ({
  params,
}: any) => {
  const req = await fetch(`https://localhost:3000/${params.id}.json`);
  const data = await req.json();

  return { props: { data } };
};

export async function getStaticPaths() {
  const req = await fetch(`https://localhost:3000/paths.json`);
  const data = await req.json();

  const paths = data.map((_: any) => {
    return {
      params: {
        id: _,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
