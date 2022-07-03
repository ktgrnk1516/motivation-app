import React, { useEffect, useState } from "react";
import Image from "next/image";

//Next.js next/image で外部URLの画像を使いたいときにやること
//https://chaika.hatenablog.com/entry/2021/07/20/083000

//next/imageのlayout='responsive'とdisplay: flex;を併用するときの注意点
//https://zenn.dev/co9xs/scraps/ffbd732b65d9b9

import loon from "../../public/loon.json";

const ChillVibes: React.FC = () => {
  const [loonA, setLoonA] = useState([]);
  const [loonB, setLoonB] = useState([]);
  const [loonC, setLoonC] = useState([]);

  //配列をシャッフルする関数
  const arrayShuffle = (array: any) => {
    for (let i = array.length - 1; 0 < i; i--) {
      // 0〜(i+1)の範囲で値を取得
      let r = Math.floor(Math.random() * (i + 1));

      // 要素の並び替えを実行
      let tmp = array[i];
      array[i] = array[r];
      array[r] = tmp;
    }
    return array;
  };

  //3分割する関数
  //https://pisuke-code.com/js-ways-to-split-string-and-array/
  const divideArrIntoPieces = (arr: any, n: number) => {
    let arrList = [];
    let idx = 0;
    while (idx < arr.length) {
      arrList.push(arr.splice(idx, idx + n));
    }
    setLoonA(arrayShuffle(arrList[0]));
    setLoonB(arrayShuffle(arrList[1]));
    setLoonC(arrayShuffle(arrList[2]));
    // return arrList;
  };

  //3分割する関数実行
  useEffect(() => {
    const san = loon.length / 3;
    divideArrIntoPieces(loon, san);
    // setLoonA(arry[0])
    // console.log(typeof arry[0]);
    // console.log(typeof loon);
  }, []);

  return (
    <div className="flex">
      <div className="w-1/3 ">
        {loonA.map((l: any, i) => (
          <Image
            src={l.img_url}
            className=""
            key={i}
            alt="loon img"
            width={400}
            height={400}
            layout="responsive"
            objectFit="cover"
          />
        ))}
      </div>
      <div className="w-1/3 ">
        {loonB.map((l: any, i) => (
          <Image
            src={l.img_url}
            className=""
            key={i}
            alt="loon img"
            width={400}
            height={400}
            layout="responsive"
            objectFit="cover"
          />
        ))}
      </div>
      <div className="w-1/3 ">
        {loonC.map((l: any, i) => (
          <Image
            src={l.img_url}
            className=""
            key={i}
            alt="loon img"
            width={400}
            height={400}
            layout="responsive"
            objectFit="cover"
          />
        ))}
      </div>
    </div>
  );
};

export default ChillVibes;
