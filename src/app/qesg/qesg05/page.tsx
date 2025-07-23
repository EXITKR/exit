import PaginationBtn from "@components/buttons/PaginationBtn";
import Title from "@components/Title";
import { getMetadata } from "@utils/Metadata";
import type { Metadata } from "next";

export const metadata: Metadata = getMetadata("ISO 26000과의 연계성")

export default function Home() {
  return (
    <>
      <div id="qesg_page" className="csr_page">
        <Title title="ISO 26000과의 연계성" desc="공급망 ESG 심사" />
        <div className="inner_main page_inner">
          <div className="content_box">
            <div className="content_box_content title gc-1-4">
              <span className="content_text">
                <span className="fw-500 tx-30">
                  2010년 국제표준화기구가 제정한 사회적책임경영에 대한 국제 가이드라인으로,
                  <br/>
                  향후 비관세 무역장벽으로 작용할 가능성이 높아지고 있습니다.
                </span>
              </span>
            </div>
            <div className="content_box_content gc-1-2 sect_point">
              <span className="content_text">
                <span className="fw-500 tc-gr">공급망 보안(Supply Chain Security), ESG(환경·사회·거버넌스), ISO 26000(사회적책임경영)</span>
                은&nbsp;
                <span className="fw-500">기업의 지속가능성</span>
                과&nbsp;
                <span className="fw-500">책임 있는 경영</span>
                을 위한 중요한 개념들이며, 서로 밀접한 연관성을 가지고 있습니다.
              </span>
            </div>
            <div className="content_box_content gc-2-4 sect_point">
              <span className="content_text">
                <span className="fw-500 tx-30">
                  공급망 보안, ESG 경영, ISO 26000은 모두 기업이 지속가능한 방식으로 운영될 수 있도록 돕는 역할을 합니다.
                </span>
                <br/><br/>
                공급망 보안은 기업의 운영 리스크를 관리하며, ESG와 ISO 26000은 사회적·환경적 리스크를 관리하는 데 초점을 맞추고 있습니다.
              </span>
            </div>
          </div>
        </div>
        <PaginationBtn
          prev_name="공급망 ESG 중요성"
          prev_url="/qesg/qesg04"
          prev_disabled={false}
          next_name=""
          next_url=""
          next_disabled={true}
        />
      </div>
    </>
  );
}