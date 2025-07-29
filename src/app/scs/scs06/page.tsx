import PaginationBtn from "@components/buttons/PaginationBtn";
import Title from "@components/Title";
import { getMetadata } from "@utils/Metadata";
import type { Metadata } from "next";

export const metadata: Metadata = getMetadata("COC (Code Of Conduct)")

export default function Home() {
  return (
    <>
      <div id="scs_page" className="coc_page">
        <Title title="COC (Code Of Conduct)" desc="Customized SCS (Supply Chain Security)" />
        <div className="inner_main page_inner">
          <div className="content_box">
            <div className="content_box_content title gc-1-4">
              <span className="content_text">
                <span className="fw-500 tx-30">COC는 조직이나 기업이 구성원들에게 기대하는 행동 기준을 명확히 정의하는 규범입니다.</span>
              </span>
            </div>
            <div className="content_box_content gc-1-4 sect_point">
              <span className="content_text">
                <span className="fw-500 tx-30">
                  공급업체를 위한 행동강령(COC)은 아동노동, 강제노동, 차별 금지 등 국제노동기준의 준수 여부를 포함한 노동·인권 관련 항목과 함께, 작업장 안전, 법정 근로 조건, 복리후생 이행 등 현장 관리 실태 전반을 종합적으로 평가하는 기준입니다.
                </span>
              </span>
            </div>
            <div className="content_box_content gc-1-4 sect_point">
              <span className="content_text">
                최근의 COC는 단일 공급업체의 준법 여부를 넘어서,&nbsp;
                <span className="fw-500">전체 공급망의 윤리성과 지속 가능성을 체계적으로 관리하는 방향으로 진화</span>하고 있습니다.
              </span>
            </div>
            <div className="content_box_content gc-1-4 sect_point">
              <span className="content_text">
                COC는 조직이&nbsp;
                <span className="fw-500 tc-bl">투명하고 공정한 방식</span>으로 운영되도록 보장하며, 규범을 준수함으로써&nbsp;
                <span className="fw-500 tc-ye">법적 리스크를 감소</span>시키고, 구성원들이 공통된 가치와 행동 기준을 공유하여&nbsp;
                <span className="fw-500 tc-gr">긍정적인 조직문화를 형성</span>하며, 윤리적 문제나 내부 갈등 발생 시 명확한 기준을 제공하여 효과적으로 대응할 수 있습니다.
              </span>
            </div>
          </div>
        </div>
        <PaginationBtn
          prev_name="C-TPAT / AEO"
          prev_url="/scs/scs05"
          prev_disabled={false}
          next_name=""
          next_url=""
          next_disabled={true}
        />
      </div>
    </>
  );
}