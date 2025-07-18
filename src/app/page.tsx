"use client"
import ActiveBtn from "@components/buttons/ActiveBtn";
import { getConfig } from "@utils/Config";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import { clientList } from "@utils/ClientList";
import { FaBuilding } from "react-icons/fa6";
import { IoDocumentText } from "react-icons/io5";

export default function Home() {
  const router = useRouter()
  const config = getConfig()

  const [windowWidth, setWindowWidth] = useState<number>(0);

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
      <div id="main_page">
        <div className="main_section">
          <div className="inner_main main_main">
            <div className="slogan_section">
              <span className="slogan"><span className="emph">EX</span>press</span>
              <span className="slogan"><span className="emph">I</span>nfallible</span>
              <span className="slogan"><span className="emph">T</span>rustworthy</span>
            </div>
            <div className="button_section">
              <div className="button_tab" onClick={() => router.push("/overview")}>
                <FaBuilding className="btn_icon"/>
                <span className="btn_text">OVERVIEW</span>
              </div>
              <div className="button_tab" onClick={() => router.push("/contact_us?index=0")}>
                <IoDocumentText className="btn_icon"/>
                <span className="btn_text">CONTACT US</span>
              </div>
            </div>
          </div>
        </div>

        <div className="trust_section">
          <div className="inner_main trust_main">
            <span className="title">OUR CLIENTS</span>
            <span className="desc">엑시트를 신뢰하는 고객기업 입니다.</span>
            <div className={"trust_list " + (clientList.length < 5 ? ("grid_" + clientList.length) : "grid_5")}>
              {clientList.map((item, index) => (
                <div className="trust_div" key={index}>
                  <Image src={item.img} alt={item.name} className="trust_img " />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
