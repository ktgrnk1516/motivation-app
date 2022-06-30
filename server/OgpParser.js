//ogp-parserをするファイル
//https://www.npmjs.com/package/ogp-parser/v/0.4.6?activeTab=readme
//node server.jsで動かす

//Node.jsでローカルのJSONファイルの読み込み
//https://golang.hateblo.jp/entry/2020/11/15/200613

//chrome拡張
//extract the links on this page

//jsonのハードコーディング
const json = [
  { id: 1, url: "https://www.pinterest.jp/pin/609815605809006965/" },
  { id: 2, url: "https://www.pinterest.jp/pin/609815605809006958/" },
  { id: 3, url: "https://www.pinterest.jp/pin/609815605809006949/" },
  { id: 4, url: "https://www.pinterest.jp/pin/609815605809006935/" },
  { id: 5, url: "https://www.pinterest.jp/pin/609815605809006930/" },
  { id: 6, url: "https://www.pinterest.jp/pin/609815605809006887/" },
  { id: 7, url: "https://www.pinterest.jp/pin/609815605809006852/" },
  { id: 8, url: "https://www.pinterest.jp/pin/609815605809006838/" },
  { id: 9, url: "https://www.pinterest.jp/pin/609815605809006810/" },
  { id: 10, url: "https://www.pinterest.jp/pin/609815605809006806/" },
  { id: 11, url: "https://www.pinterest.jp/pin/609815605809006805/" },
  { id: 12, url: "https://www.pinterest.jp/pin/609815605809006803/" },
  { id: 13, url: "https://www.pinterest.jp/pin/609815605809006801/" },
  { id: 14, url: "https://www.pinterest.jp/pin/609815605809006794/" },
  { id: 15, url: "https://www.pinterest.jp/pin/609815605809006791/" },
  { id: 16, url: "https://www.pinterest.jp/pin/609815605809006788/" },
  { id: 17, url: "https://www.pinterest.jp/pin/609815605809006785/" },
  { id: 18, url: "https://www.pinterest.jp/pin/609815605809006641/" },
  { id: 19, url: "https://www.pinterest.jp/pin/609815605809006638/" },
  { id: 20, url: "https://www.pinterest.jp/pin/609815605809006633/" },
  { id: 21, url: "https://www.pinterest.jp/pin/609815605809006631/" },
  { id: 22, url: "https://www.pinterest.jp/pin/609815605809006629/" },
  { id: 23, url: "https://www.pinterest.jp/pin/609815605809006624/" },
  { id: 24, url: "https://www.pinterest.jp/pin/609815605809006614/" },
  { id: 25, url: "https://www.pinterest.jp/pin/609815605809006608/" },
  { id: 26, url: "https://www.pinterest.jp/pin/609815605809006599/" },
  { id: 27, url: "https://www.pinterest.jp/pin/609815605809006597/" },
  { id: 28, url: "https://www.pinterest.jp/pin/609815605809006595/" },
  { id: 29, url: "https://www.pinterest.jp/pin/609815605809006594/" },
  { id: 30, url: "https://www.pinterest.jp/pin/609815605809006593/" },
  { id: 31, url: "https://www.pinterest.jp/pin/609815605809006589/" },
  { id: 32, url: "https://www.pinterest.jp/pin/609815605809006587/" },
  { id: 33, url: "https://www.pinterest.jp/pin/609815605809006567/" },
  { id: 34, url: "https://www.pinterest.jp/pin/609815605809006565/" },
  { id: 35, url: "https://www.pinterest.jp/pin/609815605809006545/" },
  { id: 36, url: "https://www.pinterest.jp/pin/609815605809006537/" },
  { id: 37, url: "https://www.pinterest.jp/pin/609815605809006530/" },
  { id: 38, url: "https://www.pinterest.jp/pin/609815605809006524/" },
  { id: 39, url: "https://www.pinterest.jp/pin/609815605809006522/" },
  { id: 40, url: "https://www.pinterest.jp/pin/609815605809006518/" },
  { id: 41, url: "https://www.pinterest.jp/pin/609815605809006517/" },
  { id: 42, url: "https://www.pinterest.jp/pin/609815605809006514/" },
  { id: 43, url: "https://www.pinterest.jp/pin/609815605809006508/" },
  { id: 44, url: "https://www.pinterest.jp/pin/609815605809006490/" },
  { id: 45, url: "https://www.pinterest.jp/pin/609815605809006485/" },
  { id: 46, url: "https://www.pinterest.jp/pin/609815605809006474/" },
  { id: 47, url: "https://www.pinterest.jp/pin/609815605809006472/" },
  { id: 48, url: "https://www.pinterest.jp/pin/609815605809006470/" },
  { id: 49, url: "https://www.pinterest.jp/pin/609815605809006467/" },
  { id: 50, url: "https://www.pinterest.jp/pin/609815605809006457/" },
  { id: 51, url: "https://www.pinterest.jp/pin/609815605809006452/" },
  { id: 52, url: "https://www.pinterest.jp/pin/609815605809006449/" },
  { id: 53, url: "https://www.pinterest.jp/pin/609815605809006432/" },
  { id: 54, url: "https://www.pinterest.jp/pin/609815605809006429/" },
  { id: 55, url: "https://www.pinterest.jp/pin/609815605809006428/" },
  { id: 56, url: "https://www.pinterest.jp/pin/609815605809006422/" },
  { id: 57, url: "https://www.pinterest.jp/pin/609815605809006415/" },
  { id: 58, url: "https://www.pinterest.jp/pin/609815605809006407/" },
  { id: 59, url: "https://www.pinterest.jp/pin/609815605809006404/" },
  { id: 60, url: "https://www.pinterest.jp/pin/609815605809006398/" },
  { id: 61, url: "https://www.pinterest.jp/pin/609815605809006396/" },
  { id: 62, url: "https://www.pinterest.jp/pin/609815605809006389/" },
  { id: 63, url: "https://www.pinterest.jp/pin/609815605809006386/" },
  { id: 64, url: "https://www.pinterest.jp/pin/609815605809006383/" },
  { id: 65, url: "https://www.pinterest.jp/pin/609815605809006381/" },
  { id: 66, url: "https://www.pinterest.jp/pin/609815605809006373/" },
  { id: 67, url: "https://www.pinterest.jp/pin/609815605809006368/" },
  { id: 68, url: "https://www.pinterest.jp/pin/609815605809006356/" },
  { id: 69, url: "https://www.pinterest.jp/pin/609815605809006341/" },
  { id: 70, url: "https://www.pinterest.jp/pin/609815605809006323/" },
  { id: 71, url: "https://www.pinterest.jp/pin/609815605809006317/" },
  { id: 72, url: "https://www.pinterest.jp/pin/609815605809006312/" },
  { id: 73, url: "https://www.pinterest.jp/pin/609815605809006310/" },
  { id: 74, url: "https://www.pinterest.jp/pin/609815605809006306/" },
  { id: 75, url: "https://www.pinterest.jp/pin/609815605809006292/" },
  { id: 76, url: "https://www.pinterest.jp/pin/609815605809006288/" },
  { id: 77, url: "https://www.pinterest.jp/pin/609815605809006285/" },
  { id: 78, url: "https://www.pinterest.jp/pin/609815605809006263/" },
  { id: 79, url: "https://www.pinterest.jp/pin/609815605809006253/" },
];

//配列の中にオブジェクトが入っている場合（二次元配列　Javascript）のvalue値の取得方法
const lists = json.map((obj) => obj.url);
const parser = require("ogp-parser");

// const get_img = () => {
//   parser(url, true)
//     .then(function (data) {
//       // console.log(data);

//       const title = data.title;
//       const ogp_img = data.ogp["og:image"];
//       console.log(title, ...ogp_img);
//     })
//     .catch(function (error) {
//       console.error(error);
//     });
// };

const get_img = (lists) => {
  lists.map((list, index) => {
    parser(list, false)
      .then(function (_) {
        //最終的にURLから得たtitleと画像URLを空の配列にpush
        // const title = _.title;
        const ogp_img = _.ogp["og:image"];
        console.log({ id: index, img_url: ogp_img[0] });
      })
      .catch(function (error) {
        console.error(error);
      });
  });
};

get_img(lists);
// console.log(get_img(lists));
