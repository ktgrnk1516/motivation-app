import type { NextPage } from "next";
import Head from "next/head";
import Life from "../src/components/Life";
import Meigen1 from "../public/Meigen1.json";
import { useCallback, useEffect, useState } from "react";
import AdmaxSwitch from "../src/components/AdmaxSwitch";
import life from "../public/LifeForIndex.json";

//use-react-screenshot
import React, { createRef } from "react";
import { useScreenshot } from "use-react-screenshot";

const Home: NextPage = ({ life }: any) => {
  //screenshot
  // const ref = createRef<HTMLElement | null>();
  // const ref = createRef(null);
  const ref = createRef<HTMLDivElement>();
  const [image, takeScreenshot] = useScreenshot();
  const getImage = () => takeScreenshot(ref.current);

  //meigen関連
  const meigen1: any = Meigen1.map((_) => _);
  //乱数関連
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
        <title>Motivation ✨</title>
      </Head>
      <main className="main">
        {/* 広告 */}
        <div className="flex justify-center mb-8  mr-3">
          <AdmaxSwitch id="88b8ac30d0d3fc49ac5df081717693eb" />
        </div>
        {/* 広告 */}
        <img width="100%" src={image} alt={'Screenshot'} />
        {/* ボタン */}
        <div ref={ref}>
        <button style={{ marginBottom: '10px' }} onClick={getImage}>
          Take screenshot
        </button>
      </div>
        {/* ボタン */}

        <Life data={life} />
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
  // const req = await fetch(`http://localhost:3000/LifeForIndex.json`);
  // const life = await req.json();

  return { props: { life } };
}
