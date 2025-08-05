import PaginationBtn from "@components/buttons/PaginationBtn";
import Title from "@components/Title";
import { getMetadata } from "@utils/Metadata";
import type { Metadata } from "next";
import Image from "next/image";
import ImgIso from "@imgs/contents/ISO_9001.png"

export const metadata: Metadata = getMetadata("ISO 9001")

export default function Home() {
  return (
    <>
      <div id="iso_page" className="quality_page">
        <Title title="ISO 9001" desc="시스템 인증" />
        <div className="inner_main page_inner">
          <div className="content_box">
            <div className="content_box_content title gc-1-4">
              <span className="content_text">
                <span className=" ">
                  ISO 9001은 국제표준화기구(ISO)에서 제정한 품질경영시스템에 대한 국제규격으로
                  <br />
                  품질 경영시스템(QMS)을 구축, 실행, 유지 및 지속적으로 개선하는 방법을 정의합니다.
                </span>
              </span>
            </div>
            <div className="content_img gc-1-4">
              <Image src={ImgIso} alt="dummy" className="img"/>
            </div>
            <div className="content_box_content gc-1-4 sect_point">
              <span className="content_text">
                ISO 9001은 조직이&nbsp;
                <span className="">효과적인 프로세스를 구축하고 직원을 훈련시키며, 고객에게 제품 또는 서비스를 일관되게 제공하고 품질을 지속적으로 개선할 수 있도록 지원하는 시스템입니다.</span>
                <br/>
                이 규격은 조직의 품질경영시스템 요구사항을 정의하며, 이를 통해 조직은 품질 목표를 달성하고 고객 만족도를 높일 수 있습니다.
              </span>
            </div>
          </div>
        </div>
        <PaginationBtn
          prev_name=""
          prev_url=""
          prev_disabled={true}
          next_name="ISO 14001"
          next_url="/iso/iso02"
          next_disabled={false}
        />
      </div>
    </>
  );
}