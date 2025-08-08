import PaginationBtn from "@components/buttons/PaginationBtn";
import SubNavigation from "@components/header/SubNavigation";
import Title from "@components/Title";
import { getMetadata } from "@utils/Metadata";
import type { Metadata } from "next";

export const metadata: Metadata = getMetadata("공급망 ESG 이슈")

export default function Home() {
  return (
    <>
      <div id="qesg_page">
        <Title title="공급망 ESG 심사" desc="공급망 ESG 심사" />
        <SubNavigation type={0}/>
        <div className="inner_main page_inner">
          <div className="content_box">
            <div className="content_box_content gc-1-4 title">
              <span className="content_text">
                <span className="tx-24">
                  그동안 공급망을 적절하게 관리하는 것은 개별 기업 차원의 이슈로 여겨졌으나,
                </span>
              </span>
            </div>
            <div className="content_box_content gc-1-4 sect_point">
              <span className="content_text">
                팬데믹 이후 전 세계적으로 공급망이 붕괴되는 혼란을 경험하면서 이제는 필수 재화나 전략물자에 대한<br/>공급망 리스크 관리가 국가적으로 중대한 과제로 부상하고 있습니다.
              </span>
            </div>
            <div className="content_box_content gc-1-4 sect_point">
              <span className="content_text">
                기업에 대한 ESG 평가는 미국, EU 등을 중심으로 공급망 실사를 의무화하는 등 공급망 리스크 관리를 중점적으로 관리하는 추세입니다. 따라서 글로벌 기업들은 이에 대응하기위해 공급망 관리 시스템을 구축하고 있습니다.
              </span>
            </div>
            <div className="content_box_content gc-1-4 sect_point">
              <span className="content_text">
                EU는 기업의 지속가능한 공급망 실사지침(CSDDD), 탄소국경조정제도(CBAM), 넷제로 산업법,<br/>메탄 배출 제한 가스 수입법, 에코 디자인 규정, 자연 복원법 등이 입법이 되었습니다.<br/>특히 CSDDD는 일정규모 이상 기업의 공급망 내 환경·사회적 영향(인권과 환경 보호 의무를 의무화) 실사를 의무화하는 제도입니다.
                <br/><br/>
                CSDDD는 2027년부터 실질적으로적용될 것이며, 이 법이 시행되면 EU 역내에서<br/>활동하는 기업은 거래하는 공급망 내 기업의 인권과 환경관련 리스크를 평가해야 합니다.<br/>이러한 추세는 국내에서도 반영될 것으로 예상되고 있어 선제적인 대응이 필요한 상황입니다.
              </span>
            </div>
          </div>
        </div>
        <PaginationBtn
          prev_name="공급망 ESG는?"
          prev_url="/qesg/qesg01"
          prev_disabled={false}
          next_name="공급망 ESG 전략"
          next_url="/qesg/qesg03"
          next_disabled={false}
        />
      </div>
    </>
  );
}