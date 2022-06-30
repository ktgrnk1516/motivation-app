import React, { useEffect, useState } from "react";
import Image from "next/image";

//Next.js next/image で外部URLの画像を使いたいときにやること
//https://chaika.hatenablog.com/entry/2021/07/20/083000

//next/imageのlayout='responsive'とdisplay: flex;を併用するときの注意点
//https://zenn.dev/co9xs/scraps/ffbd732b65d9b9

import loon from "../../public/loon.json";

const PostCard: React.FC = () => {
  const [loonA, setLoonA] = useState([]);
  const [loonB, setLoonB] = useState([]);
  const [loonC, setLoonC] = useState([]);

  //3分割する関数
  //https://pisuke-code.com/js-ways-to-split-string-and-array/
  const divideArrIntoPieces = (arr: any, n: number) => {
    let arrList = [];
    let idx = 0;
    while (idx < arr.length) {
      arrList.push(arr.splice(idx, idx + n));
    }
    setLoonA(arrList[0]);
    setLoonB(arrList[1]);
    setLoonC(arrList[2]);
    // return arrList;
  };

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
          />
        ))}
      </div>
    </div>
  );
};

export default PostCard;
