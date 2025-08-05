import PaginationBtn from "@components/buttons/PaginationBtn";
import Title from "@components/Title";
import { getMetadata } from "@utils/Metadata";
import type { Metadata } from "next";
import Image from "next/image";
import ImgIso from "@imgs/contents/ISO_45001.png"

export const metadata: Metadata = getMetadata("ISO 45001")

export default function Home() {
  return (
    <>
      <div id="iso_page" className="safe_page">
        <Title title="ISO 45001" desc="시스템 인증" />
        <div className="inner_main page_inner">
          <div className="content_box">
            <div className="content_box_content title gc-1-4">
              <span className="content_text">
                <span className=" ">
                  ISO 45001은 국제표준화기구(ISO)가 제정한 세계 최초의 국제 산업안전보건 경영시스템(OH&S)으로
                  <br />
                  사업장에서 발생할 수 있는 각종 위험을 사전 예측 및 예방하고, 작업자 안전을 위한 실용적인 솔루션을 제공하는
                  <br />
                  산업 보건 및 안전 관리 경영시스템의 국제 표준입니다.
                </span>
              </span>
            </div>
            <div className="content_img gc-1-4">
              <Image src={ImgIso} alt="dummy" className="img"/>
            </div>
            <div className="content_box_content gc-1-4 sect_point">
              <span className="content_text">
                ISO 45001은 산업안전보건 정책, 목표, 계획, 실행, 운영, 감사 및 검토에 대한 기준을 수립하고, 핵심요소로&nbsp;
                <span className="">리더십의 헌신, 근로자 참여, 위험 식별 및 평가, 법률 및 규정준수, 비상 계획, 사고 조사 및 지속적 개선</span> 등의 표준이 포함되어 있습니다.
              </span>
            </div>
          </div>
        </div>
        <PaginationBtn
          prev_name="ISO 14001"
          prev_url="/iso/iso02"
          prev_disabled={false}
          next_name="ISO 기타 (CE / UL)"
          next_url="/iso/iso04"
          next_disabled={false}
        />
      </div>
    </>
  );
}