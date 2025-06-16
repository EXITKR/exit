"use client"
import Link from "next/link";
import WebLogo from "@imgs/logo/web_logo.png"
import Image from "next/image";
import Navigation from "@components/header/Navigation";
import { useState } from "react";

const Header = () => {
  const [onMouse, setOnMouse] = useState<number>(0)
  return (
    <>
        <header id="header_pc">
            <div className="inner_main header_main">
                <Link href="/" className="">
                    <Image src={WebLogo} alt="엑시트 로고" className="web_logo"/>
                </Link>
                <Navigation setMouseOver={(index: number) => setOnMouse(index)}/>
            </div>
            <div className={"header_sub " + (onMouse !== 0 ? "dp-block" : "dp-none")}
              onMouseOver={() => setOnMouse(1)}
              onMouseOut={() => setOnMouse(0)}>
              <div className="header_sub_main">
              </div>
            </div>
        </header>
    </>
  );
}

export default Header