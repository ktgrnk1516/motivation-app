import styles from "./header.module.scss";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";

const menu = [
  { title: "ulzzang girls", url: "UlzzangGL", desc: "（美しい女性）" },
  { title: "ulzzang boys", url: "UlzzangBY", desc: "（かっこいい男性）" },
  { title: "muscle boys", url: "MuscleBY", desc: "（マッチョマン）" },
  { title: "chill vibes...😌", url: "ChillVibes", desc: "（優雅な時間）" },
];

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuFunction = () => {
    setOpenMenu(!openMenu);
  };

  //routerのid
  const router = useRouter();
  const { id } = router.query;
  console.log(id);

  return (
    <React.Fragment>
      <header id="header" className={styles.header}>
        <div className="font-mono text-xs ">
          <Link href="/">
            <a className={styles.logo}>
              {id !== undefined ? id : "Work Hard See Result!!"}
            </a>
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link href={`${menu[0].url}`}>
                <a>{menu[0].title}</a>
              </Link>
            </li>
            <li>
              <Link href={`${menu[1].url}`}>
                <a>{menu[1].title}</a>
              </Link>
            </li>
            <li>
              <Link href={`${menu[2].url}`}>
                <a>{menu[2].title}</a>
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.container}>
          <div className={styles.humburger} onClick={() => menuFunction()}>
            {/* <span className={openMenu ? styles.open : undefined}></span>
            <span className={openMenu ? styles.open : undefined}></span> */}
            <p className={openMenu ? styles.open : undefined}>≡</p>
          </div>
        </div>
      </header>
      <div
        className={`${styles.drawerMenu} ${openMenu ? styles.open : undefined}`}
      >
        <ul>
          <div className={styles.close} onClick={() => menuFunction()}>
            <span></span>
            <span></span>
            <p>Close</p>
          </div>
          <li onClick={() => menuFunction()}>
            <Link href={`${menu[0].url}`}>
              <a>
                <p className={styles.subTitle}>
                  {menu[0].title}
                  {menu[0].desc}
                </p>
                {/* <p className={styles.subTitle}>{menu[0].desc}</p> */}
              </a>
            </Link>
          </li>
          <li onClick={() => menuFunction()}>
            <Link href={`${menu[1].url}`}>
              <a>
                <p className={styles.subTitle}>
                  {menu[1].title}
                  {menu[1].desc}
                </p>
                {/* <p className={styles.subTitle}>{menu[1].desc}</p> */}
              </a>
            </Link>
          </li>
          <li onClick={() => menuFunction()}>
            <Link href={`${menu[2].url}`}>
              <a>
                <p className={styles.subTitle}>
                  {menu[2].title}
                  {menu[2].desc}
                </p>
                {/* <p className={styles.subTitle}>{menu[2].desc}</p> */}
              </a>
            </Link>
          </li>
          <li onClick={() => menuFunction()}>
            <Link href={`${menu[3].url}`}>
              <a>
                <p className={styles.subTitle}>
                  {menu[3].title}
                  {menu[3].desc}
                </p>
                {/* <p className={styles.subTitle}>{menu[3].desc}</p> */}
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Header;
