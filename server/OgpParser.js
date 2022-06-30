//ogp-parserをするファイル
//https://www.npmjs.com/package/ogp-parser/v/0.4.6?activeTab=readme
//node server.jsで動かす

//Node.jsでローカルのJSONファイルの読み込み
//https://golang.hateblo.jp/entry/2020/11/15/200613

//chrome拡張
//extract the links on this page

//jsonのハードコーディング
const json = [
  { id: 1, url: "https://www.pinterest.jp/pin/609815605784233088/" },
  { id: 2, url: "https://www.pinterest.jp/pin/609815605784232690/" },
  { id: 3, url: "https://www.pinterest.jp/pin/609815605784232686/" },
  { id: 4, url: "https://www.pinterest.jp/pin/609815605784232682/" },
  { id: 5, url: "https://www.pinterest.jp/pin/609815605784232678/" },
  { id: 6, url: "https://www.pinterest.jp/pin/609815605784232674/" },
  { id: 7, url: "https://www.pinterest.jp/pin/609815605784232665/" },
  { id: 8, url: "https://www.pinterest.jp/pin/609815605784232662/" },
  { id: 9, url: "https://www.pinterest.jp/pin/609815605781182645/" },
  { id: 10, url: "https://www.pinterest.jp/pin/609815605781004877/" },
  { id: 11, url: "https://www.pinterest.jp/pin/609815605781004860/" },
  { id: 12, url: "https://www.pinterest.jp/pin/609815605781004857/" },
  { id: 13, url: "https://www.pinterest.jp/pin/609815605781004833/" },
  { id: 14, url: "https://www.pinterest.jp/pin/609815605781004824/" },
  { id: 15, url: "https://www.pinterest.jp/pin/609815605781004815/" },
  { id: 16, url: "https://www.pinterest.jp/pin/609815605780822963/" },
  { id: 17, url: "https://www.pinterest.jp/pin/609815605780822959/" },
  { id: 18, url: "https://www.pinterest.jp/pin/609815605780822946/" },
  { id: 19, url: "https://www.pinterest.jp/pin/609815605780822898/" },
  { id: 20, url: "https://www.pinterest.jp/pin/609815605780822892/" },
  { id: 21, url: "https://www.pinterest.jp/pin/609815605780623639/" },
  { id: 22, url: "https://www.pinterest.jp/pin/609815605780623574/" },
  { id: 23, url: "https://www.pinterest.jp/pin/609815605780623987/" },
  { id: 24, url: "https://www.pinterest.jp/pin/609815605780623941/" },
  { id: 25, url: "https://www.pinterest.jp/pin/609815605780623912/" },
  { id: 26, url: "https://www.pinterest.jp/pin/609815605780623910/" },
  { id: 27, url: "https://www.pinterest.jp/pin/609815605780623876/" },
  { id: 28, url: "https://www.pinterest.jp/pin/609815605780623644/" },
  { id: 29, url: "https://www.pinterest.jp/pin/609815605780623563/" },
  { id: 30, url: "https://www.pinterest.jp/pin/609815605780623515/" },
  { id: 31, url: "https://www.pinterest.jp/pin/609815605780623510/" },
  { id: 32, url: "https://www.pinterest.jp/pin/609815605780623507/" },
  { id: 33, url: "https://www.pinterest.jp/pin/609815605780623463/" },
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
