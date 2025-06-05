"use client"
import ActiveBtn from "@components/buttons/ActiveBtn";
import { clientBusinessInterface } from "@interfaces/pagesInterface";
import { getConfig } from "@utils/Config";
import { useRouter } from "next/navigation";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

import client01 from "@imgs/logo/client/client01.png";
import Image from "next/image";

export default function Home() {
  const router = useRouter()
  const config = getConfig()
  const clientList: clientBusinessInterface[] = [
    {
      name: "웰크론",
      img: client01
    },
  ]

  return (
    <>
      <div id="introduce_page">
        <div className="main_section">
          <div className="inner_main main_main">
            <span className="slogan">{config.slogan}</span>
            <ActiveBtn style="white" name="인증 신청하기" onClick={() => router.push("/contact_us?index=1")} disabled={false}/>
          </div>
        </div>

        <div className="vision_section">
          <div className="inner_main vision_main">
            <FaQuoteLeft className="icon" />
            <span className="vision">{config.vision}</span>
            <FaQuoteRight className="icon" />
          </div>
        </div>

        <div className="history_section">
          <div className="inner_main history_main">
            <span className="title">ROADMAP</span>
            <span className="desc">3-Step Consulting Process</span>
            <div className="history_div">
              <div className="history_bar first">
                <div className="history_bar_div">
                  <div className="bar_div">
                    <div className="bar"></div>
                    <div className="circle"></div>
                    <div className="bar"></div>
                  </div>
                  <span className="year">2025</span>
                </div>
                <div className="text_box">
                  <span className="step">1단계</span>
                  <span className="consulting">시스템/제품/경영 인증컨설팅</span>
                  <span className="consulting_li">· ISO 인증컨설팅</span>
                  <span className="consulting_li">· 정보보안컨설팅</span>
                  <span className="consulting_li">· 공급망 보안심사 컨설팅</span>
                </div>
              </div>
              <div className="history_bar second">
                <div className="history_bar_div">
                  <div className="bar_div">
                    <div className="bar"></div>
                    <div className="circle"></div>
                    <div className="bar"></div>
                  </div>
                  <span className="year">2027</span>
                </div>
                <div className="text_box">
                  <span className="step">2단계</span>
                  <span className="consulting">정부기관 연계 컨설팅</span>
                  <span className="consulting_li">· 중앙/지방 정부 지원 컨설팅</span>
                  <span className="consulting_li">· 스마트시티 관련 컨설팅</span>
                  <span className="consulting_li">· 컨설팅 분야의 다각화</span>
                </div>
              </div>
              <div className="history_bar third">
                <div className="history_bar_div">
                  <div className="bar_div">
                    <div className="bar"></div>
                    <div className="circle"></div>
                    <div className="bar"></div>
                  </div>
                  <span className="year">2030</span>
                </div>
                <div className="text_box">
                  <span className="step">3단계</span>
                  <span className="consulting">고객 맞춤형 컨설팅</span>
                  <span className="consulting_li">· 최적의 맞춤 인증 컨설팅 솔루션 지원</span>
                  <span className="consulting_li">· 컨설팅 자료 빅데이터 구축</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mission_section">
          <div className="inner_main mission_main">
            <span className="title">MISSON</span>
            <span className="desc">{config.mission}</span>
            <div className="nav_div">
              <div className="nav nav_01" onClick={() => router.push("/iso_info")}>
                <div className="name_div">
                  <span className="name">ISO 인증</span>
                </div>
              </div>
              <div className="nav nav_02" onClick={() => router.push("/enterprise_info")}>
                <div className="name_div">
                  <span className="name">기업맞춤형 인증</span>
                </div>
              </div>
              <div className="nav nav_03" onClick={() => router.push("/product_info")}>
                <div className="name_div">
                  <span className="name">제품 인증</span>
                </div>
              </div>
              <div className="nav nav_04" onClick={() => router.push("/business_info")}>
                <div className="name_div">
                  <span className="name">경영 컨설팅</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="trust_section">
          <div className="inner_main trust_main">
            <span className="title">CLIENTS</span>
            <span className="desc">엑시트를 신뢰하는 고객기업 입니다.</span>
            <div className="trust_list">
              {clientList.map((item, index) => (
                <div className="trust_div" key={index}>
                  <Image src={item.img} alt={item.name} className="trust_img"/>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="contact_section">
          <div className="inner_main contact_main">
            <span className="title">CONTACT</span>
            <span className="desc">신속하고 정확한 솔루션을 제공해 드리겠습니다.</span>
            <div className="btn_div">
              <ActiveBtn style="default" name="문의하기" onClick={() => router.push("/contact_us?index=0")} disabled={false}/>
              <ActiveBtn style="filled" name="인증 신청하기" onClick={() => router.push("/contact_us?index=1")} disabled={false}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
