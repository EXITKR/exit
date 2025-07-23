"use client"
import ActiveTab from "@components/buttons/ActiveTab";
import PaginationBtn from "@components/buttons/PaginationBtn";
import Title from "@components/Title";
import { activeTabsInterface } from "@interfaces/pagesInterface";
import { useState } from "react";

export default function Home() {
  const tabList: activeTabsInterface[] = [
    { name: "C-TPAT" },
    { name: "AEO" },
  ]
  const [isTabIdx, setTabIdx] = useState<number>(0)
  const switchContent = () => {
    switch (isTabIdx) {
      case 0:
        return <>
          <div className="content_box">
            <div className="content_box_content title gc-1-4">
              <span className="content_text">
                <span className="fw-500 tx-30">
                  미국 세관에서 실시하는 C-TPAT (Customs Trade Partnership Against Terrorism) 프로그램은
                  <br />
                  알 카에다에 의한 9.11 테러 후에 발효된 미국 세관당국과 미국 내 수입 관련 기업 간의 테러방지 협약이며,
                  <br />
                  2024년 기준 1만 개 이상의 업체가 이 협약에 가입하고 있습니다.
                </span>
              </span>
            </div>
            <div className="content_box_content gc-1-2 sect_point">
              <span className="content_text">
                C-TPAT 심사를 통과하게 되면, 수입화물 통관 시 무작위 검사의 확률이 줄어들고, 검사가 필요한 경우에도 우선 처리되어 통관 지연을 최소화할 수 있습니다.
              </span>
            </div>
            <div className="content_box_content gc-2-4 sect_point">
              <span className="content_text">
                또한 C-TPAT 심사 통과 시 기업 전담 공급망 보안 전문가 배정, 육로 국경에서의 FAST(Free and Secure Trade) 레인 사용, 자연재해 및 테러 발생 시 비즈니스 조기 복구 우선권 부여 등의 혜택이 부여됩니다.
              </span>
            </div>
          </div>
        </>
      case 1:
        return <>
          <div className="content_box">
            <div className="content_box_content title gc-1-4">
              <span className="content_text">
                <span className="fw-500 tx-30">
                  AEO인증 기업은 통관 절차에서 우선 처리되어 지연시간을 최소화하고,
                  <br />
                  빠른 배송을 통해 물류 비용을 절감할 수 있으며,
                  <br />
                  세금 유예와 통관 절차 간소화 등의 세금 혜택을 받을 수 있습니다.
                </span>
              </span>
            </div>
            <div className="content_box_content gc-1-2 sect_point">
              <span className="content_text">
                AEO인증은 안전한 거래와 위험 관리를 보장하며, 불법 거래나 테러를 예방하는 보안 관리가 강화되며, 글로벌 무역 파트너들에게 신뢰를 주고, 법적 안정성과 국제적 규제 준수를 증명하여 법적 리스크를 최소화할 수 있습니다.
              </span>
            </div>
            <div className="content_box_content gc-2-4 sect_point">
              <span className="content_text">
                여러 나라에 생산 시설을 운영하는 다국적 기업은 AEO인증으로 글로벌 공급망에서 효율적인 통관과 물류처리를 받을 수 있습니다. 또한 해외 수출입이 많은 기업 및 해외 시장 진출을 목표로 하는 기업들은 AEO 인증을 통해 무역 효율성을 높이고, EU, 미국, 중국 등과의 거래에서 빠른 통관과 비용 절감을 실현할 수 있습니다.
              </span>
            </div>
          </div>
        </>
      default:
        return <>
          <div className="content_box">
            <div className="content_box_content title gc-1-4">
              <span className="content_text">
                <span className="fw-500 tx-30">
                  미국 세관에서 실시하는 C-TPAT (Customs Trade Partnership Against Terrorism) 프로그램은
                  <br />
                  알 카에다에 의한 9.11 테러 후에 발효된 미국 세관당국과 미국 내 수입 관련 기업 간의 테러방지 협약이며,
                  <br />
                  2024년 기준 1만 개 이상의 업체가 이 협약에 가입하고 있습니다.
                </span>
              </span>
            </div>
            <div className="content_box_content gc-1-2 sect_point">
              <span className="content_text">
                C-TPAT 심사를 통과하게 되면, 수입화물 통관 시 무작위 검사의 확률이 줄어들고, 검사가 필요한 경우에도 우선 처리되어 통관 지연을 최소화할 수 있습니다.
              </span>
            </div>
            <div className="content_box_content gc-2-4 sect_point">
              <span className="content_text">
                또한 C-TPAT 심사 통과 시 기업 전담 공급망 보안 전문가 배정, 육로 국경에서의 FAST(Free and Secure Trade) 레인 사용, 자연재해 및 테러 발생 시 비즈니스 조기 복구 우선권 부여 등의 혜택이 부여됩니다.
              </span>
            </div>
          </div>
        </>
    }
  }

  const switchTitle = () => {
    switch (isTabIdx) {
      case 0:
        return <Title title="C-TPAT" desc="Customized SCS (Supply Chain Security)" />
      case 1:
        return <Title title="AEO" desc="Customized SCS (Supply Chain Security)" />
      default:
        return <Title title="C-TPAT" desc="Customized SCS (Supply Chain Security)" />
    }
  }
  return (
    <>
      <div id="scs_page">
        {switchTitle()}
        <div className="inner_main page_inner">
          <ActiveTab tabs={tabList} index={isTabIdx} setIndex={(idx: number) => setTabIdx(idx)} />
          {switchContent()}
        </div>
        <PaginationBtn
          prev_name="정보보호서비스"
          prev_url="/scs/scs02"
          prev_disabled={false}
          next_name="COC (Code Of Conduct)"
          next_url="/scs/scs06"
          next_disabled={false}
        />
      </div>
    </>
  );
}