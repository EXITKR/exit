import ContentBox from "@components/content_ui/Content";
import Title from "@components/Title";
import { contentIso03 } from "@utils/contents/ContentIso";
import { getMetadata } from "@utils/Metadata";
import type { Metadata } from "next";

export const metadata: Metadata = getMetadata("ISO 45001")

export default function Home() {
  return (
    <>
      <div id="iso_page" className="safe_page">
        <Title title="ISO 45001" desc="시스템 인증" />
        <div className="inner_main page_inner">
          <div className="content_box">
            <div className="content_box_content">
              <span className="content_text">
                <span className="fw-500 tx-30">ISO 45001은 국제표준화기구(ISO)가 제정한 세계 최초의 국제 산업안전보건 경영시스템(OH&S)으로 사업장에서 발생할 수 있는 각종 위험을 사전 예측 및 예방하고, 작업자 안전을 위한 실용적인 솔루션을 제공하는 산업 보건 및 안전 관리 경영시스템의 국제 표준입니다.</span>
                <br /><br />
                ISO 45001은 산업안전보건 정책, 목표, 계획, 실행, 운영, 감사 및 검토에 대한 기준을 수립하고, 핵심요소로 리더십의 헌신, 근로자 참여, 위험 식별 및 평가, 법률 및 규정준수, 비상 계획, 사고 조사 및 지속적 개선 등의 표준이 포함되어 있습니다.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}