"use client"
import Link from "next/link";
import WebLogo from "@imgs/logo/web_logo.png"
import Image from "next/image";
import Navigation from "@components/header/Navigation";
import { useEffect, useRef, useState } from "react";
import HeaderSub from "@components/header/HeaderSub";
import { FiMenu } from "react-icons/fi";

const Header = () => {
    const ref = useRef<HTMLDivElement | null>(null);
    const [windowWidth, setWindowWidth] = useState<number>(0);
    const [onMouse, setOnMouse] = useState<boolean>(false)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref && !ref.current?.contains(event.target as Node) && windowWidth > 1000) {
                setOnMouse(false);
            }
        }
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [ref, windowWidth])

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleResize = () => {
                setWindowWidth(window.innerWidth);
            };
            handleResize();

            window.addEventListener('resize', handleResize);
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, []);
    return (
        <>
            <header id="header_pc" ref={ref}>
                <div className="inner_main header_main">
                    <Link href="/" className="">
                        <Image src={WebLogo} alt="엑시트 로고" className="web_logo" />
                    </Link>
                    <Navigation setMouseOver={(status) => setOnMouse(status)} />
                    <FiMenu className="menu_icon" onClick={() => setOnMouse(!onMouse)} />
                </div>
                <HeaderSub onMouse={onMouse} setMouseOver={(status: boolean) => setOnMouse(status)} onMobile={windowWidth} />
            </header>
        </>
    );
}

export default Header