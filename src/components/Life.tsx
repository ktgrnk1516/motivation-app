import React, { useEffect, useState } from "react";
import Image from "next/image";

//Next.js next/image で外部URLの画像を使いたいときにやること
//https://chaika.hatenablog.com/entry/2021/07/20/083000

//next/imageのlayout='responsive'とdisplay: flex;を併用するときの注意点
//https://zenn.dev/co9xs/scraps/ffbd732b65d9b9

import data from "../../public/Life.json";

const ChillVibes: React.FC = () => {
  const [dataA, setDataA] = useState([]);
  const [dataB, setDataB] = useState([]);
  const [dataC, setDataC] = useState([]);

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
    setDataA(arrayShuffle(arrList[0]));
    setDataB(arrayShuffle(arrList[1]));
    setDataC(arrayShuffle(arrList[2]));
    // return arrList;
  };

  //3分割する関数実行
  useEffect(() => {
    const san = data.length / 3;
    divideArrIntoPieces(data, san);
    // setDataA(arry[0])
    // console.log(typeof arry[0]);
    // console.log(typeof data);
  }, []);

  return (
    <div className="flex">
      <div className="w-1/3 ">
        {dataA.map((l: any, i) => (
          <Image
            src={l.img_url}
            className=""
            key={i}
            alt="data img"
            width={400}
            height={400}
            layout="responsive"
            objectFit="cover"
          />
        ))}
      </div>
      <div className="w-1/3 ">
        {dataB.map((l: any, i) => (
          <Image
            src={l.img_url}
            className=""
            key={i}
            alt="data img"
            width={400}
            height={400}
            layout="responsive"
            objectFit="cover"
          />
        ))}
      </div>
      <div className="w-1/3 ">
        {dataC.map((l: any, i) => (
          <Image
            src={l.img_url}
            className=""
            key={i}
            alt="data img"
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
