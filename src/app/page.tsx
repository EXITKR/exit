"use client"
import { useRouter } from "next/navigation";
import Image from "next/image";
import { clientList } from "@utils/ClientList";
import { FaBuilding } from "react-icons/fa6";
import { IoDocumentText } from "react-icons/io5";
import Title from "@components/Title";

export default function Home() {
  const router = useRouter()

  return (
    <>
      <div id="main_page">
        <div className="main_section">
          <div className="inner_main main_main">
            <div className="slogan_section">
              <span className="slogan"><span className="emph">EX</span><span className="sub">press</span></span>
              <span className="slogan"><span className="emph inv">EX</span><span className="emph">I</span><span className="sub">nfallible</span></span>
              <span className="slogan"><span className="emph inv">EXI</span><span className="emph">T</span><span className="sub">rustworthy</span></span>
            </div>
            {/* <div className="button_section">
              <div className="button_tab" onClick={() => router.push("/overview")}>
                <FaBuilding className="btn_icon"/>
                <span className="btn_text">OVERVIEW</span>
              </div>
              <div className="button_tab" onClick={() => router.push("/contact_us?index=0")}>
                <IoDocumentText className="btn_icon"/>
                <span className="btn_text">CONTACT US</span>
              </div>
            </div> */}
          </div>
        </div>

        {/* <div className="trust_section">
          <Title title="OUR CLIENTS" desc="엑시트를 신뢰하는 고객기업 입니다."/>
          <div className="inner_main trust_main">
            <div className={"trust_list " + (clientList.length < 5 ? ("grid_" + clientList.length) : "grid_5")}>
              {clientList.map((item, index) => (
                <div className="trust_div" key={index}>
                  <Image src={item.img} alt={item.name} className="trust_img " />
                </div>
              ))}
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}
