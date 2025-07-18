import ContentBox from "@components/content_ui/Content";
import Title from "@components/Title";
import { contentQesg04 } from "@utils/contents/ContentQesg";
import { getMetadata } from "@utils/Metadata";
import type { Metadata } from "next";

export const metadata: Metadata = getMetadata("공급망 ESG 심사 중요성")

export default function Home() {
  return (
    <>
      <div id="qesg_page">
        <Title title="공급망 ESG 중요성" desc="공급망 ESG 심사" />
        <div className="inner_main page_inner">
          <div className="content_box">
            <div className="content_box_content">
              <span className="content_text">
                <span className="fw-500 tx-30">최근 글로벌 기업(상장사·대기업 등)은 여러 이해관계자(소비자, 투자자, 정부, 글로벌 고객사 등)로부터 지속가능경영(ESG)에 대한 (공시)요구를 받고 있습니다.</span>
                <br /><br />
                특히 최근 EU에서 공식 채택된 기업 지속가능성 실사 지침(CSDDD)은 전 세계 기업들에게 환경 및 인권 리스크에 대한 실질적인 관리 책임을 요구하고 있으며, 기업들은 글로벌 기준에 부합하는 대응 역량을 갖추는 것이 시급한 과제가 되었습니다.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}