"use client"
import Link from "next/link";
import WebLogo from "@imgs/logo/web_logo.png"
import Image from "next/image";
import Navigation from "@components/header/Navigation";
import { useState } from "react";
import HeaderSub from "@components/header/HeaderSub";

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
            <HeaderSub onMouse={onMouse} setMouseOver={(index: number) => setOnMouse(index)}/>
        </header>
    </>
  );
}

export default Header