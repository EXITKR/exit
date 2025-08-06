"use client"
import WebLogo from "@imgs/logo/web_logo_3.png"
import Image from "next/image";
import Navigation from "@components/header/Navigation";
import { useEffect, useRef, useState } from "react";
import HeaderSub from "@components/header/HeaderSub";
import { FiMenu, FiX } from "react-icons/fi";
import { useRouter } from "next/navigation";

const Header = () => {
    const router = useRouter()
    const ref = useRef<HTMLDivElement | null>(null);
    const [windowWidth, setWindowWidth] = useState<number>(0);
    const [onMouse, setOnMouse] = useState<boolean>(false)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref && !ref.current?.contains(event.target as Node) && windowWidth > 1360) {
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

    useEffect(() => {
        if (onMouse) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [onMouse])

    useEffect(() => {
        console.log(onMouse)
    }, [onMouse])
    return (
        <>
            <header id="header_pc" ref={ref}>
                <div className="head_inner_main header_main">
                    <div className="web_logo_div" onClick={() => {
                        router.push("/")
                        setOnMouse(false)
                    }}>
                        <Image src={WebLogo} alt="엑시트 로고" className="web_logo" />
                    </div>
                    <div className="header_navi_section">
                        <Navigation setMouseOver={(status: boolean) => setOnMouse(status)} />
                        <div className="hamburger" onClick={() => setOnMouse(!onMouse)}>
                            {onMouse
                                ?
                                <FiX className="menu_icon" />
                                :
                                <FiMenu className="menu_icon" />
                            }
                        </div>
                    </div>
                </div>
                <HeaderSub onMouse={onMouse} setMouseOver={(status: boolean) => setOnMouse(status)} onMobile={windowWidth} />
            </header>
        </>
    );
}

export default Header