//ogp-parserをするファイル
//https://www.npmjs.com/package/ogp-parser/v/0.4.6?activeTab=readme
//node server.jsで動かす

//Node.jsでローカルのJSONファイルの読み込み
//https://golang.hateblo.jp/entry/2020/11/15/200613

//chrome拡張
//extract the links on this page

//jsonのハードコーディング
const json = [
  { id: 1, url: "https://www.pinterest.jp/pin/609815605809097946/" },
  { id: 2, url: "https://www.pinterest.jp/pin/609815605809097932/" },
  { id: 3, url: "https://www.pinterest.jp/pin/609815605809097898/" },
  { id: 4, url: "https://www.pinterest.jp/pin/609815605809097868/" },
  { id: 5, url: "https://www.pinterest.jp/pin/609815605809097858/" },
  { id: 6, url: "https://www.pinterest.jp/pin/609815605809097854/" },
  { id: 7, url: "https://www.pinterest.jp/pin/609815605809097843/" },
  { id: 8, url: "https://www.pinterest.jp/pin/609815605809097833/" },
  { id: 9, url: "https://www.pinterest.jp/pin/609815605809097831/" },
  { id: 10, url: "https://www.pinterest.jp/pin/609815605809097816/" },
  { id: 11, url: "https://www.pinterest.jp/pin/609815605809097814/" },
  { id: 12, url: "https://www.pinterest.jp/pin/609815605809097810/" },
  { id: 13, url: "https://www.pinterest.jp/pin/609815605809097808/" },
  { id: 14, url: "https://www.pinterest.jp/pin/609815605809097806/" },
  { id: 15, url: "https://www.pinterest.jp/pin/609815605809097805/" },
  { id: 16, url: "https://www.pinterest.jp/pin/609815605809097801/" },
  { id: 17, url: "https://www.pinterest.jp/pin/609815605809097783/" },
  { id: 18, url: "https://www.pinterest.jp/pin/609815605809097739/" },
  { id: 19, url: "https://www.pinterest.jp/pin/609815605809097732/" },
  { id: 20, url: "https://www.pinterest.jp/pin/609815605809097712/" },
  { id: 21, url: "https://www.pinterest.jp/pin/609815605809097705/" },
  { id: 22, url: "https://www.pinterest.jp/pin/609815605809097703/" },
  { id: 23, url: "https://www.pinterest.jp/pin/609815605809097690/" },
  { id: 24, url: "https://www.pinterest.jp/pin/609815605809097686/" },
  { id: 25, url: "https://www.pinterest.jp/pin/609815605809097685/" },
  { id: 26, url: "https://www.pinterest.jp/pin/609815605809097680/" },
  { id: 27, url: "https://www.pinterest.jp/pin/609815605809097676/" },
  { id: 28, url: "https://www.pinterest.jp/pin/609815605809097668/" },
  { id: 29, url: "https://www.pinterest.jp/pin/609815605809097664/" },
  { id: 30, url: "https://www.pinterest.jp/pin/609815605809097656/" },
  { id: 31, url: "https://www.pinterest.jp/pin/609815605809097653/" },
  { id: 32, url: "https://www.pinterest.jp/pin/609815605809097650/" },
  { id: 33, url: "https://www.pinterest.jp/pin/609815605809097648/" },
  { id: 34, url: "https://www.pinterest.jp/pin/609815605809097633/" },
  { id: 35, url: "https://www.pinterest.jp/pin/609815605809097632/" },
  { id: 36, url: "https://www.pinterest.jp/pin/609815605809097626/" },
  { id: 37, url: "https://www.pinterest.jp/pin/609815605809097609/" },
  { id: 38, url: "https://www.pinterest.jp/pin/609815605809097605/" },
  { id: 39, url: "https://www.pinterest.jp/pin/609815605809097595/" },
  { id: 40, url: "https://www.pinterest.jp/pin/609815605809097579/" },
  { id: 41, url: "https://www.pinterest.jp/pin/609815605809097279/" },
  { id: 42, url: "https://www.pinterest.jp/pin/609815605809097252/" },
  { id: 43, url: "https://www.pinterest.jp/pin/609815605809097251/" },
  { id: 44, url: "https://www.pinterest.jp/pin/609815605809097248/" },
  { id: 45, url: "https://www.pinterest.jp/pin/609815605809097244/" },
  { id: 46, url: "https://www.pinterest.jp/pin/609815605809097242/" },
  { id: 47, url: "https://www.pinterest.jp/pin/609815605809097240/" },
  { id: 48, url: "https://www.pinterest.jp/pin/609815605809097236/" },
  { id: 49, url: "https://www.pinterest.jp/pin/609815605809055921/" },
  { id: 50, url: "https://www.pinterest.jp/pin/609815605809097232/" },
  { id: 51, url: "https://www.pinterest.jp/pin/609815605809056039/" },
  { id: 52, url: "https://www.pinterest.jp/pin/609815605809056034/" },
  { id: 53, url: "https://www.pinterest.jp/pin/609815605809056010/" },
  { id: 54, url: "https://www.pinterest.jp/pin/609815605809056005/" },
  { id: 55, url: "https://www.pinterest.jp/pin/609815605809055926/" },
  {
    id: 56,
    url: "https://www.pinterest.jp/pin/Ad3X1dSUo79boEXmNorhoP4iJVDpwdcDboUXW4Z8aIAgMtrKMBJVCkU/",
  },
  { id: 57, url: "https://www.pinterest.jp/pin/609815605773758266/" },
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
