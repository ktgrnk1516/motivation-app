import type { NextPage } from "next";
import Head from "next/head";
import ChillVibes from "../src/components/ChillVibes";
import Meigen from "../public/Meigen.json";
import { useCallback } from "react";

const Home: NextPage = () => {
  const meigen: any = Meigen.map((_) => _);
  console.log(meigen[0]);


    //乱数の整数
    const getRandom = useCallback(() => {
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
    }, [Meigen.length]);
  
    const random = getRandom();

  return (
    <div>
      <Head>
        <title>Index Page</title>
      </Head>
      <main className="main">
        <ChillVibes />
      </main>
      <div className="fixed flex flex-col items-center justify-around font-fancy tracking-widest text-sm  card">
        {/* <div className="flex  items-center meigen">{meigen[10].meigen}</div> */}
        <div className="meigen">{meigen[random].meigen}</div>
        <div className="text-center  auth">-{meigen[random].auth}-</div>
      </div>
    </div>
  );
};

export default Home;
