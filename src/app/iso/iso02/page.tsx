import ContentBox from "@components/content_ui/Content";
import Title from "@components/Title";
import { contentIso02 } from "@utils/contents/ContentIso";
import { getMetadata } from "@utils/Metadata";
import type { Metadata } from "next";

export const metadata: Metadata = getMetadata("ISO 14001")

export default function Home() {
  return (
    <>
      <div id="iso_page" className="environment_page">
        <Title title="ISO 14001" desc="시스템 인증" />
        <div className="inner_main page_inner">
          <div className="content_box">
            <div className="content_box_content">
              <span className="content_text">
                <span className="fw-500 tx-30">ISO 14001은 국제표준화기구(ISO)에서 제정한 환경경영시스템에 관한 국제규격으로 기업이 환경성과를 지속적으로 개선하기 위해 환경경영시스템(EMS)을 구축하고 운영하도록 요구하는 것입니다.</span>
                <br /><br />
                ISO 14001은 조직이 환경경영시스템을 설계 및 구현하고, 환경성과를 지속적으로 개선할 수 있는 프레임워크를 제공하며, 이를 통해 환경 위험을 효과적으로 관리하고, 관련 법적 요건을 준수하며, 환경 목표 달성을 위한 적극적인 조치를 취하고 있는 등 지속적으로 가능한 경영을 효율적으로 관리할 수 있도록 합니다.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}