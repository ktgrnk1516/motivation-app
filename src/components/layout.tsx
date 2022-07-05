import Link from "next/link";
import { ReactNode } from "react";
import Header from "./Header";
import Button from "./Button";

//use-react-screenshot
// import React, { createRef } from "react";
// import { useScreenshot } from "use-react-screenshot";

const Layout = ({ children }: Props) => {
  //screenshot
  // const ref = createRef<HTMLDivElement>();
  // const [image, takeScreenshot] = useScreenshot();
  // const getImage = () => {
  //   console.log("shot!");
  //   takeScreenshot(ref.current);
  // };

  return (
    <div>
      {/* 画像 */}
      {/* {image === null ? null : (
        <img
          className="w-full h-1/5 object-cover"
          src={image}
          alt={"とった画像"}
        />
      )} */}
      {/* 画像 */}
      <nav>
        <Header />
      </nav>
      {/* <Button props={getImage} /> */}
      {children}
    </div>
  );
};

type Props = {
  children?: ReactNode;
};

export default Layout;
