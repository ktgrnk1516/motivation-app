import type { NextPage } from "next";
import Head from "next/head";
import ChillVibes from "../src/components/ChillVibes";
import Meigen from "../public/Meigen.json";

const Home: NextPage = () => {
  const meigen: any = Meigen.map((_) => _);
  console.log(meigen[0]);

  return (
    <div>
      <Head>
        <title>Index Page</title>
      </Head>
      <main className="main">
        <ChillVibes />
      </main>
      <div className=" flex flex-col items-center justify-around font-fancy tracking-widest text-xs  card">
        {/* <div className="flex  items-center meigen">{meigen[10].meigen}</div> */}
        <div className="meigen">{meigen[10].meigen}</div>
        <div className="text-center  auth">-{meigen[10].auth}-</div>
      
      </div>
    </div>
  );
};

export default Home;
