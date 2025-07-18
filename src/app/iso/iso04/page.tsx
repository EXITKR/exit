"use client"
import ActiveTab from "@components/buttons/ActiveTab";
import PaginationBtn from "@components/buttons/PaginationBtn";
import ContentBox from "@components/content_ui/Content";
import Title from "@components/Title";
import { activeTabsInterface } from "@interfaces/pagesInterface";
import { contentIso04, contentIso05 } from "@utils/contents/ContentIso";
import { useState } from "react";

export default function Home() {
  const tabList: activeTabsInterface[] = [
    { name: "유럽인증 CE" },
    { name: "미주인증 UL" },
  ]
  const [isTabIdx, setTabIdx] = useState<number>(0)
  const switchContent = () => {
    switch (isTabIdx) {
      case 0:
        return <>
          <div className="content_box">
            <div className="content_box_content">
              <span className="content_text">
                <span className="fw-500 tx-30">CE 마크는 제품이 유럽연합(EU) 및 유럽경제지역(EEA)의 건강, 안전, 환경, 소비자 보호 등 관련 법적 요건을 충족함을 공식적으로 입증하는 유럽 통합규격 인증마크입니다.</span>
                <br /><br />
                유럽 시장에 제품을 출시하고자 하는 EU 내외의 모든 제조업체에게 CE 마크 부착은 필수 요건이며, 이를 통해 제품은 EEA 전역에서 자유로운 유통이 가능해집니다.
                <br />
                CE 마크의 범위는 소비자의 건강, 안전, 위생 및 환경보호 차원에서 위험성이 내포된 제품에 해당되며, 단순한 라벨을 넘어, 해당 제품이 유럽 기준에 부합하는 높은 수준의 안전성과 적합성을 확보하고 있음을 의미합니다.
                <br />
                CE 인증을 통해 귀사의 제품은 EU 연합내의 수출에 제한이 없어 유럽 시장 진출의 기반을 마련하고, 글로벌 경쟁력 또한 강화할 수 있습니다.
              </span>
            </div>
          </div>
        </>
      case 1:
        return <>
          <div className="content_box">
            <div className="content_box_content">
              <span className="content_text">
                <span className="fw-500 tx-30">UL은 전 세계에서 제품, 시설, 프로세스, 시스템, 인력을 대상으로 국제적으로 인정된 안전 및 품질 평가 기준에 따라 테스트하고 인증하는 글로벌 안전 과학 기관입니다.</span>
                <br /><br />
                UL 인증은 제품 뿐만 아니라 인력, 시설, 절차, 시스템까지 포괄하는 안전 및 품질 기반의 종합 인증 서비스를 제공합니다.
                <br />
                제조업체가 해당 기준을 충족하는 경우 UL 마크를 부착할 수 있으며, 이를 통해 권위 있는 제3자 인증으로 제품의 신뢰성을 입증할 수 있습니다.
              </span>
            </div>
          </div>
        </>
      default:
        return <>
          <div className="content_box">
            <div className="content_box_content">
              <span className="content_text">
                <span className="fw-500 tx-30">CE 마크는 제품이 유럽연합(EU) 및 유럽경제지역(EEA)의 건강, 안전, 환경, 소비자 보호 등 관련 법적 요건을 충족함을 공식적으로 입증하는 유럽 통합규격 인증마크입니다.</span>
                <br /><br />
                유럽 시장에 제품을 출시하고자 하는 EU 내외의 모든 제조업체에게 CE 마크 부착은 필수 요건이며, 이를 통해 제품은 EEA 전역에서 자유로운 유통이 가능해집니다.
                <br />
                CE 마크의 범위는 소비자의 건강, 안전, 위생 및 환경보호 차원에서 위험성이 내포된 제품에 해당되며, 단순한 라벨을 넘어, 해당 제품이 유럽 기준에 부합하는 높은 수준의 안전성과 적합성을 확보하고 있음을 의미합니다.
                <br />
                CE 인증을 통해 귀사의 제품은 EU 연합내의 수출에 제한이 없어 유럽 시장 진출의 기반을 마련하고, 글로벌 경쟁력 또한 강화할 수 있습니다.
              </span>
            </div>
          </div>
        </>
    }
  }

  const switchTitle = () => {
    switch (isTabIdx) {
      case 0:
        return <Title title="유럽인증 CE" desc="시스템 인증" />
      case 1:
        return <Title title="미주인증 UL" desc="시스템 인증" />
    }
  }
  return (
    <>
      <div id="iso_page" className={isTabIdx === 0 ? "ce_page" : "ul_page"}>
        {switchTitle()}
        <div className="inner_main page_inner">
          <ActiveTab tabs={tabList} index={isTabIdx} setIndex={(idx: number) => setTabIdx(idx)} />
          {switchContent()}
        </div>
        <PaginationBtn
          prev_name="ISO 45001"
          prev_url="/iso/iso03"
          prev_disabled={false}
          next_name=""
          next_url=""
          next_disabled={true}
        />
      </div>
    </>
  );
}