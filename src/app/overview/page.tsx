import { contentOverview } from "@components/contents/ContentOverview";
import { getMetadata } from "@utils/Metadata";
import ExitImage from "@imgs/contents/exit.png";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = getMetadata("CEO 인사말")

export default function Home() {
  return (
    <>
      <div id="content_page">
        <div className="inner_main page_inner overview_main">
          <div className="content_box">
            <div className="content_box_title">
              <div className={"title_div " + contentOverview.background}>
                <span className="title_text">
                  CEO 인사말
                </span>
              </div>
            </div>
            <div className="content_box_content">
              <span className="content_text">안녕하십니까.
                <br /><br />
                ㈜EXIT 대표 이승준입니다.
                <br /><br />
                오늘날 기업을 둘러싼 환경은 빠르게 변화하고 있습니다. 시장 환경에서 안정적이고 신뢰할 수 있는 공급망 확보는 기업 가치 극대화의 핵심 요소 중 하나입니다. ESG 경영은 이제 선택이 아닌 생존 전략이며, 공급망 전반에 걸쳐 투명하고 책임 있는 경영이 필수가 되었습니다.
                <br /><br />
                <span className="fw-500">
                  저희 ㈜EXIT는 기업의 공급망 보안(정보보호서비스) 강화에 있어 차별화된 역량을 보유하고 있습니다.
                </span>
                <br /><br />
                저희는 위험 요소를 사전에 예측하고 대응하는 전략적 접근 방식을 통해 복잡한 공급망 환경 속에서도 안전성과 신뢰성을 유지할 수 있도록 최적의 전략을 제공합니다. 기업이 더욱 탄탄한 기반 위에서 공급망의 리스크를 최소화하고, 클라이언트 EXIT의 돌파구를 마련해드릴 수 있도록 노력합니다.
                <br /><br />
                ㈜EXIT는 <span className="fw-500">신속하게(EXpress), 빈틈없이(Infallible), 신뢰를 바탕으로(Trustworthy)</span>라는 3
                가지 핵심 경영가치를 바탕으로 우리가 수행하는 모든 프로젝트를 지원합니다. 저희는 신뢰할 수 있는 파트너로서 클라이언트의 공급망 보안과 기업의 미래 전략을 함께 고민하는 파트너가 되어, 성공적인 EXIT을 위해 최적의 길을 안내해 드리겠습니다.
                <br /><br />
                <div className="ceo">
                  <span className="fw-500">
                    ㈜EXIT 대표 이승준
                  </span>
                  <Image className="exit" src={ExitImage} alt="인감" />
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}