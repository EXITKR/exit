"use client"
import ActiveBtn from "@components/buttons/ActiveBtn";
import { RoadmapInterface } from "@interfaces/pagesInterface";
import { getConfig } from "@utils/Config";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import { navigationList } from "@utils/NavigationList";
import { clientList } from "@utils/ClientList";

export default function Home() {
  const router = useRouter()
  const config = getConfig()
  const roadmapList: RoadmapInterface[] = [
    {
      sort: "first",
      year: "2025",
      step: "1단계",
      consulting: "시스템/제품/경영 인증컨설팅",
      consulting_li: [
        "· ISO 인증컨설팅",
        "· 정보보안컨설팅",
        "· 공급망 보안심사 컨설팅",
      ]
    },
    {
      sort: "second",
      year: "2027",
      step: "2단계",
      consulting: "정부기관 연계 컨설팅",
      consulting_li: [
        "· 중앙/지방 정부 지원 컨설팅",
        "· 스마트시티 관련 컨설팅",
        "· 컨설팅 분야의 다각화",
      ]
    },
    {
      sort: "third",
      year: "2030",
      step: "3단계",
      consulting: "고객 맞춤형 컨설팅",
      consulting_li: [
        "· 최적의 맞춤 인증 컨설팅 솔루션 지원",
        "· 컨설팅 자료 빅데이터 구축",
      ]
    },
  ]

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
            <span className="slogan">{config.slogan}</span>
            {windowWidth > 1000
              ?
              <ActiveBtn style="white" name="인증 신청하기" onClick={() => router.push("/contact_us?index=1")} disabled={false} />
              :
              <ActiveBtn style="white" name="문의하기" onClick={() => router.push("/contact_us?index=0")} disabled={false} />
            }
          </div>
        </div>

        <div className="history_section">
          <div className="inner_main history_main">
            <span className="title">ROADMAP</span>
            <span className="desc">3-Step Consulting Process</span>
            <div className="history_div">
              {roadmapList.map((item, index) => (
                <div className={"history_bar " + item.sort} key={index}>
                <div className="history_bar_div">
                  <div className="bar_div">
                    <div className="bar"></div>
                    <div className="circle"></div>
                    <div className="bar"></div>
                  </div>
                  <span className="year">{item.year}</span>
                </div>
                <div className="text_box">
                  <span className="step">{item.step}</span>
                  <span className="consulting">{item.consulting}</span>
                  {item.consulting_li.map((val, idx) => (
                    <span className="consulting_li" key={idx}>{val}</span>
                  ))}
                </div>
              </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mission_section">
          <div className="inner_main mission_main">
            <span className="title">MISSON</span>
            <span className="desc">{config.mission}</span>
            <div className="nav_div">
              {navigationList.filter((item, index) => index !== 3).map((item, index) => (
                <div className={"nav nav_" + (index + 1).toString().padStart(2, "0")} key={index}>
                  <div className="name_div">
                    <span className="name" onClick={() => router.push(item.url)}>{item.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="trust_section">
          <div className="inner_main trust_main">
            <span className="title">CLIENTS</span>
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

        <div className="contact_section">
          <div className="inner_main contact_main">
            <span className="title">CONTACT</span>
            <span className="desc">신속하고 정확한 솔루션을 제공해 드리겠습니다.</span>
            <div className="btn_div">
              <ActiveBtn style="default" name="문의하기" onClick={() => router.push("/contact_us?index=0")} disabled={false} />
              {windowWidth > 1000
                ?
                <ActiveBtn style="filled" name="인증 신청하기" onClick={() => router.push("/contact_us?index=1")} disabled={false} />
                :
                null
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
