import React, { useEffect, useState } from "react";
import Image from "next/image";

//Next.js next/image で外部URLの画像を使いたいときにやること
//https://chaika.hatenablog.com/entry/2021/07/20/083000

//next/imageのlayout='responsive'とdisplay: flex;を併用するときの注意点
//https://zenn.dev/co9xs/scraps/ffbd732b65d9b9

import data from "../../public/UlzzangGL.json";

const UlzzangGL: React.FC = () => {
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
    // setDataC(arrayShuffle(arrList[2]));
  };

  useEffect(() => {
    const san = data.length / 3;
    divideArrIntoPieces(data, san);
    // setLoonA(arry[0])
    // console.log(typeof arry[0]);
    // console.log(typeof loon);
  }, []);

  return (
    <div className="flex">
      <div className="w-1/2 ">
        {dataA.map((l: any, i) => (
          <Image
            src={l.img_url}
            className=""
            key={i}
            alt="data img"
            width={800}
            height={800}
            layout="responsive"
            objectFit="cover"
          />
        ))}
      </div>
      <div className="w-1/2 ">
        {dataB.map((l: any, i) => (
          <Image
            src={l.img_url}
            className=""
            key={i}
            alt="data img"
            width={800}
            height={800}
            layout="responsive"
            objectFit="cover"
          />
        ))}
      </div>
      {/* <div className="w-1/3 ">
        {dataC.map((l: any, i) => (
          <Image
            src={l.img_url}
            className=""
            key={i}
            alt="data img"
            width={800}
            height={800}
            layout="responsive"
            objectFit="cover"
          />
        ))}
      </div> */}
    </div>
  );
};

export default UlzzangGL;
