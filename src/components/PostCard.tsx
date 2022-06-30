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
  const divideArrIntoPieces = (arr: any, n: number) => {
    let arrList = [];
    let idx = 0;
    while (idx < arr.length) {
      arrList.push(arr.slice(idx, idx + n));
    }
    return arrList;
  };

  useEffect(() => {
    // const arry = divideArrIntoPieces(loon, loon.length / 3);
    // setA(arry[0]);
    // console.log(arry);
  }, []);

  return (
    <div className="flex">
      <div className="w-1/3 ">
        {loon.map((l: any, i) => (
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
        {loon.map((l: any, i) => (
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
        {loon.map((l: any, i) => (
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
