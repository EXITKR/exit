"use client"
import ActiveTab from "@components/buttons/ActiveTab";
import PaginationBtn from "@components/buttons/PaginationBtn";
import Title from "@components/Title";
import { activeTabsInterface } from "@interfaces/pagesInterface";
import { useState } from "react";

export default function Home() {
  const tabList: activeTabsInterface[] = [
    { name: "개인정보보호 시스템 및 프로세스 구축" },
    { name: "DLP( Data Loss Prevention) 시스템" },
    { name: "ISO 27001" },
  ]
  const [isTabIdx, setTabIdx] = useState<number>(0)
  const switchContent = () => {
    switch (isTabIdx) {
      case 0:
        return <>
          <div className="content_box">
            <div className="content_box_content">
              <span className="content_text">
                <span className="fw-500 tx-30">국내 여러 기업들 및 여러 공공기관 등 개인정보 유출 사고 증가하며, 심화되는 개인 정보 보호 유출 위험을 예방하기 위한 개인정보보호 시스템과 프로세스의 구축이 요구되고 있습니다.</span>
                <br /><br />
                이미 글로벌 유통사 및 대형 유통사들은 본사뿐만이 아닌 물류를 위탁한 3PL 업체들을 대상으로도 개인정보관리 프로세스를 적용하고 있는 추세입니다.
                <br />
                특히, 배송 및 이벤트 행사 등의 진행에 있어 대량의 개인정보의 유출은 기업의 이미지 저하, 개인정보보호법 70조-75조 사이의 양형 기준에 근거해 법적 처벌 대상이 될 수 있습니다.
                <br />
                ‘유통사 - 납품업체 - 3PL 업체’의 흐름으로 이어지는 전방위적인 개인정보보호 시스템 구축은 개인정보보호법 위반에 대한 기업의 법적 리스크를 최소화하고 안전하게 개인정보를 활용하기 위한 시스템 구축을 적극적으로 도입하고 있습니다.
              </span>
            </div>
          </div>
        </>
      case 1:
        return <>
          <div className="content_box">
            <div className="content_box_content">
              <span className="content_text">
                <span className="fw-500 tx-30">
                  정보유출방지(DLP)는 조직 내 중요 정보와 데이터를 보호하기 위해, 문서·이미지 등 저장된 파일 내 주요 정보를 탐지하고 저장매체, 출력, 파일 전송 등 다양한 경로를 통해 발생할 수 있는 유출을 차단함으로써 외부 유출을 예방하는 시스템입니다.
                </span>
                <br /><br />
                DLP 시스템은 이메일, 웹하드, 메신저 등 다양한 경로를 통한 정보 유출을 효과적으로 차단할 수 있습니다. 또한 설치와 관리가 용이하고, 사내 네트워크를 통한 데이터 전송을 집중적으로 감시할 수 있어 기업들이 필수적으로 도입하고 있습니다.
              </span>
            </div>
          </div>
        </>
      case 2:
        return <>
          <div className="content_box">
            <div className="content_box_content">
              <span className="content_text">
                ISO 27001은 규모와 활동분야에 관계없이 모든 기업에 정보보안관리시스템을 구축, 구현, 유지 및 지속적으로 개선하기 위한 국제표준입니다. 기업의 조직이 소유하거나 처리하는 데이터의 보안과 관련된 위험을 관리하는 시스템을 구축하여 정보보안 리스크를 관리하고 있음을 입증하는데 사용됩니다.
                <br /><br />
                <span className="fw-500 tx-30">ISO 27001은 사이버 범죄가 증가하고 새로운 위협이 끊임없이 등장함에 따라 조직이 위험을 인식하고 취약점을 사전에 파악하여 해결할 수 있도록 지원합니다.</span>
              </span>
            </div>
          </div>
        </>
      default:
        return <>
          <div className="content_box">
            <div className="content_box_content">
              <span className="content_text">
                <span className="fw-500 tx-30">국내 여러 기업들 및 여러 공공기관 등 개인정보 유출 사고 증가하며, 심화되는 개인 정보 보호 유출 위험을 예방하기 위한 개인정보보호 시스템과 프로세스의 구축이 요구되고 있습니다.</span>
                <br /><br />
                이미 글로벌 유통사 및 대형 유통사들은 본사뿐만이 아닌 물류를 위탁한 3PL 업체들을 대상으로도 개인정보관리 프로세스를 적용하고 있는 추세입니다.
                <br />
                특히, 배송 및 이벤트 행사 등의 진행에 있어 대량의 개인정보의 유출은 기업의 이미지 저하, 개인정보보호법 70조-75조 사이의 양형 기준에 근거해 법적 처벌 대상이 될 수 있습니다.
                <br />
                ‘유통사 - 납품업체 - 3PL 업체’의 흐름으로 이어지는 전방위적인 개인정보보호 시스템 구축은 개인정보보호법 위반에 대한 기업의 법적 리스크를 최소화하고 안전하게 개인정보를 활용하기 위한 시스템 구축을 적극적으로 도입하고 있습니다.
              </span>
            </div>
          </div>
        </>
    }
  }

  const switchTitle = () => {
    switch (isTabIdx) {
      case 0:
        return <Title title="개인정보보호 시스템 및 프로세스 구축" desc="Customized SCS (Supply Chain Security)" />
      case 1:
        return <Title title="DLP(Data Loss Prevention) 시스템" desc="Customized SCS (Supply Chain Security)" />
      case 2:
        return <Title title="ISO 27001" desc="Customized SCS (Supply Chain Security)" />
      default:
        return <Title title="개인정보보호 시스템 및 프로세스 구축" desc="Customized SCS (Supply Chain Security)" />
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
          prev_name="Customized SCS (맞춤형 공급망 보안)는 무엇인가?"
          prev_url="/scs/scs01"
          prev_disabled={false}
          next_name="C-TPAT / AEO"
          next_url="/scs/scs05"
          next_disabled={false}
        />
      </div>
    </>
  );
}