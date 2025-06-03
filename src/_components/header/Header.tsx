import Link from "next/link";
import WebLogo from "@imgs/logo/web_logo.png"
import Image from "next/image";
import Navigation from "@components/header/Navigation";

const Header = () => {
  return (
    <>
        <header id="header_pc">
            <div className="inner_main header_main">
                <Link href="/" className="">
                    <Image src={WebLogo} alt="엑시트 로고" className="web_logo"/>
                </Link>
                <Navigation/>
            </div>
        </header>
    </>
  );
}

export default Header