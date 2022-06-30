import React, { useEffect, useState } from "react";
import Image from "next/image";

//Next.js next/image で外部URLの画像を使いたいときにやること
//https://chaika.hatenablog.com/entry/2021/07/20/083000

//next/imageのlayout='responsive'とdisplay: flex;を併用するときの注意点
//https://zenn.dev/co9xs/scraps/ffbd732b65d9b9

import loon from "../../public/loon.json";

const PostCard: React.FC = () => {
  const [a, setA] = useState([]);
  const [b, setB] = useState([]);
  const [c, setC] = useState([]);

  //3分割する関数
  //https://pisuke-code.com/js-ways-to-split-string-and-array/
  function divideArrIntoPieces(arr: any, n: any) {
    const arrList = [];
    const idx = 0;
    while (idx < arr.length) {
      arrList.push(arr.slice(idx, idx + n));
    }
    setA(arrList[0]);
    setB(arrList[1]);
    setC(arrList[2]);

    // return arrList;
  }

  useEffect(() => {
    divideArrIntoPieces(loon, loon.length / 3);
    // console.log(arrList);
  }, []);

  return (
    <div className="flex">
      <div className="w-1/3 ">
        {/* <main className=""> */}
        {a.map((l: any, i) => (
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
        {/* <main className=""> */}
        {b.map((l: any, i) => (
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
        {/* <main className=""> */}
        {c.map((l: any, i) => (
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
