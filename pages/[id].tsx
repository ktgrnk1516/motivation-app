// import type { NextPage } from "next";
import Head from "next/head";
import UlzzangGL from "../src/components/UlzzangGL";
import UlzzangBY from "../src/components/UlzzangBY";
import MuscleBY from "../src/components/MuscleBY";
import ChillVibes from "../src/components/ChillVibes";
import { useRouter } from "next/router";
import Meigen from "../public/Meigen.json";
import { useCallback, useEffect, useState } from "react";

const OtherPage = () => {
  //routerのid
  const router = useRouter();
  const { id } = router.query;

  const meigen: any = Meigen.map((_) => _);
  // console.log(meigen[0]);

  const [random, setRandom] = useState<number>(0);

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

  useEffect(() => {
    const randoms: any = getRandom();
    setRandom(randoms);
  }, []);

  if (id === "UlzzangGL") {
    return (
      <div>
        <Head>
          <title>Index Page</title>
        </Head>
        <main className="main">
          <UlzzangGL />
        </main>
        <div className="fixed flex flex-col items-center justify-around font-fancy tracking-widest   card">
          {/* <div className="flex  items-center meigen">{meigen[10].meigen}</div> */}
          <div className="text-sm meigen">{meigen[random].meigen}</div>
          <div className="text-xs text-center  auth">
            -{meigen[random].auth}-
          </div>
        </div>
      </div>
    );
  } else if (id === "UlzzangBY") {
    return (
      <div>
        <Head>
          <title>Index Page</title>
        </Head>
        <main className="main">
          <UlzzangBY />
        </main>
        <div className="fixed flex flex-col items-center justify-around font-fancy tracking-widest   card">
          {/* <div className="flex  items-center meigen">{meigen[10].meigen}</div> */}
          <div className="text-sm meigen">{meigen[random].meigen}</div>
          <div className="text-xs text-center  auth">
            -{meigen[random].auth}-
          </div>
        </div>
      </div>
    );
  } else if (id === "MuscleBY") {
    return (
      <div>
        <Head>
          <title>Index Page</title>
        </Head>
        <main className="main">
          <MuscleBY />
        </main>
        <div className="fixed flex flex-col items-center justify-around font-fancy tracking-widest   card">
          {/* <div className="flex  items-center meigen">{meigen[10].meigen}</div> */}
          <div className="text-sm meigen">{meigen[random].meigen}</div>
          <div className="text-xs text-center  auth">
            -{meigen[random].auth}-
          </div>
        </div>
      </div>
    );
  } else if (id === "ChillVibes") {
    return (
      <div>
        <Head>
          <title>Index Page</title>
        </Head>
        <main className="main">
          <ChillVibes />
        </main>
        <div className="fixed flex flex-col items-center justify-around font-fancy tracking-widest   card">
          {/* <div className="flex  items-center meigen">{meigen[10].meigen}</div> */}
          <div className="text-sm meigen">{meigen[random].meigen}</div>
          <div className="text-xs text-center  auth">
            -{meigen[random].auth}-
          </div>
        </div>
      </div>
    );
  }
};

export default OtherPage;
