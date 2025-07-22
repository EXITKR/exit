import PaginationBtn from "@components/buttons/PaginationBtn";
import Title from "@components/Title";
import { getMetadata } from "@utils/Metadata";
import type { Metadata } from "next";

export const metadata: Metadata = getMetadata("맞춤형 공급망 보안은 무엇인가?")

export default function Home() {
  const title = "Customized SCS\r\n(맞춤형 공급망 보안)는 무엇인가?"
  return (
    <>
      <div id="scs_page">
        <Title title={title} desc="Customized SCS (Supply Chain Security)" />
        <div className="inner_main page_inner">
          <div className="content_box">
            <div className="content_box_content title">
              <span className="content_text">
                <span className="fw-500 tx-30">공급망 보안은 기업의 공급망을 보호하고, 외부 위협으로부터 안정성을 유지하는 데 초점을 맞춘 개념입니다.</span>
              </span>
            </div>
            <div className="content_box_content desc_1 sect_point">
              <span className="content_text">
                공급망 보안은 하청, 외주, 부자재 등 공급망 전반에 걸친 윤리적조달 체계는 물론, 환경 관리 수준, 내부 통제 시스템의 문서화, 불만처리 절차 등까지 포괄하여 지속적인 개선 여부를 실사와 모니터링을 통해 확인하는 체계로 운영됩니다.
                <br />
                고객맞춤형 공급망 보안은 고객의 요구도에 맞추어 물리적 보안, 사이버 보안, 운영 리스크 관리, 규제준수 등을 포함하여 공급망의 전반적인 안정성을 확보하는 것을 지원합니다.
              </span>
            </div>
            <div className="content_box_content desc_2 sect_point">
              <span className="content_text">
                고객맞춤형 공급망 보안을 통해
                <br />
                첫째, 물리적 보안으로는 창고, 물류 센터, 운송 과정에서의 도난 및 손실방지
                <br />
                둘째, 사이버보안으로는 공급망 내 IT 시스템 및 데이터 보호, 해킹 및 정보 유출 방지
                <br />
                셋째, 리스크 관리로는 공급업체의 신뢰성 검증, 공급망 내 취약점 분석 및 대응
                <br />
                넷째, 규제 준수 관리로는 CTPAT(Customs Trade Partnership Against Terrorism), COC(Code Of Conduct)와 같은 보안 표준 준수
                <br />
                같은 기업의 전반적인 공급망 보안의 향상을 지원합니다.
              </span>
            </div>
          </div>
        </div>
        <PaginationBtn
          prev_name=""
          prev_url=""
          prev_disabled={true}
          next_name="정보보호서비스"
          next_url="/scs/scs02"
          next_disabled={false}
        />
      </div>
    </>
  );
}