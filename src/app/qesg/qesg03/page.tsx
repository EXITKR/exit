import PaginationBtn from "@components/buttons/PaginationBtn";
import Title from "@components/Title";
import { getMetadata } from "@utils/Metadata";
import type { Metadata } from "next";
import Image from "next/image";
import ImgEsg from "@imgs/contents/esg_02.png"

export const metadata: Metadata = getMetadata("공급망 ESG 전략")

export default function Home() {
  return (
    <>
      <div id="qesg_page">
        <Title title="공급망 ESG 전략" desc="공급망 ESG 심사" />
        <div className="inner_main page_inner">
          <div className="content_box">
            <div className="content_box_content title gc-1-4">
              <span className="content_text">
                <span className="tx-24">
                  공급망 ESG 전략은 기업의 지속가능한 성장을 위해 환경(Environment), 사회(Social), 지배구조(Governance) 요소를 공급망 관리에 통합하는 것을 의미합니다.
                </span>
              </span>
            </div>
            <div className="content_img gc-1-4">
              <Image src={ImgEsg} alt="dummy" className="img"/>
            </div>
            <div className="content_box_content gc-1-4 sect_point">
              <span className="content_text">
                이는 기업이 제품 생산 및 유통 과정에서 발생할 수 있는 ESG 리스크를 사전에 관리하고, 협력사와의 협력을 통해 사회적 책임을 다하며, 투명하고 윤리적인 공급망을 구축하는 것을 목표로 합니다.
              </span>
            </div>
            <div className="content_box_content gc-1-4 sect_point">
              <span className="content_text">
                또한 ESG 경영은 강제노동 및 아동노동의 배제, 성별·인종·종교에 따른 차별을 시정하는 것을 뜻합니다. 강제노동의 경우, 공급망의 일부에서라도 강제노동이 개입될 경우 제품 통관이 금지되거나 몰수될 수 있기 때문에, 대외 무역에 밀접하게 관련되어 있는 기업들은 공급망 ESG는 더욱 중요한 상황입니다.
              </span>
            </div>
          </div>
        </div>
        <PaginationBtn
          prev_name="공급망 ESG 이슈"
          prev_url="/qesg/qesg02"
          prev_disabled={false}
          next_name="공급망 ESG 중요성"
          next_url="/qesg/qesg04"
          next_disabled={false}
        />
      </div>
    </>
  );
}