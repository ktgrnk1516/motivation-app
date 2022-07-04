import type { NextPage } from "next";
import Head from "next/head";
import Life from "../src/components/Life";
import Meigen1 from "../public/Meigen1.json";
import { useCallback, useEffect, useState } from "react";

const Home: NextPage = ({ data }) => {
  const meigen1: any = Meigen1.map((_) => _);
  // console.log(meigen[0]);

  const [random, setRandom] = useState<number>(0);

  //乱数の整数
  const getRandom = useCallback(() => {
    if (Meigen1.length === 0) {
      return;
    } else {
      //Meigenのlength
      const len = Meigen1.length;
      //ランダムな数値を作る
      // const min = 0;
      // const max = len;
      return Math.floor(Math.random() * len);
    }
  }, [Meigen1.length]);

  useEffect(() => {
    const randoms: any = getRandom();
    setRandom(randoms);
  }, []);

  return (
    <div>
      <Head>
        <title>Index Page</title>
      </Head>
      <main className="main">
        <Life data={data} />
      </main>
      <div className="fixed flex flex-col items-center justify-around font-fancy tracking-widest   card">
        <div className="text-sm sm:text-center text-start meigen">
          {meigen1[random].meigen}
        </div>
        <div className="text-xs text-center  auth">
          -{meigen1[random].auth}-
        </div>
      </div>
    </div>
  );
};

export default Home;

//URLによってjsonを取得し分ける
export async function getStaticProps() {
  const req = await fetch(`http://localhost:3000/Life.json`);
  const data = await req.json();

  return { props: { data } };
}
