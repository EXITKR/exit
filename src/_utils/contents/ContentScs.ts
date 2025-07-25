import { ContentBoxInterface } from "@interfaces/pagesInterface";
import DlpImage from "@imgs/contents/dlp.png";

export const contentScs01: ContentBoxInterface = {
  title: "맞춤형 공급망 보안은 무엇인가?",
  background: 'scs_title',
  content: `공급망 보안은 기업의 공급망을 보호하고, 외부 위협으로부터 안정성을 유지하는 데 초점을 맞춘 개념입니다.
공급망 보안은 하청, 외주, 부자재 등 공급망 전반에 걸친 윤리적조달 체계는 물론, 환경 관리 수준, 내부 통제 시스템의 문서화, 불만처리 절차 등까지 포괄하여 지속적인 개선 여부를 실사와 모니터링을 통해 확인하는 체계로 운영됩니다.
고객맞춤형 공급망 보안은 고객의 요구도에 맞추어 물리적 보안, 사이버 보안, 운영 리스크 관리, 규제준수 등을 포함하여 공급망의 전반적인 안정성을 확보하는 것을 지원합니다.

고객맞춤형 공급망 보안을 통해
  첫째, 물리적 보안으로는 창고, 물류 센터, 운송 과정에서의 도난 및 손실방지
  둘째, 사이버보안으로는 공급망 내 IT 시스템 및 데이터 보호, 해킹 및 정보 유출 방지
  셋째, 리스크 관리로는 공급업체의 신뢰성 검증, 공급망 내 취약점 분석 및 대응
  넷째, 규제 준수 관리로는 CTPAT(Customs Trade Partnership Against Terrorism), COC(Code Of Conduct)와 같은 보안 표준 준수
같은 기업의 전반적인 공급망 보안의 향상을 지원합니다.`,
}

export const contentScs02: ContentBoxInterface = {
  title: "개인정보보호 시스템 및 프로세스 구축",
  background: 'scs_title',
  content: `국내 여러 기업들 및 여러 공공기관 등 개인정보 유출 사고 증가하며, 심화되는 개인 정보 보호 유출 위험을 예방하기 위한 개인정보보호 시스템과 프로세스의 구축이 요구되고 있습니다.

이미 글로벌 유통사 및 대형 유통사들은 본사뿐만이 아닌 물류를 위탁한 3PL 업체들을 대상으로도 개인정보관리 프로세스를 적용하고 있는 추세입니다.

특히, 배송 및 이벤트 행사 등의 진행에 있어 대량의 개인정보의 유출은 기업의 이미지 저하, 개인정보보호법 70조-75조 사이의 양형 기준에 근거해 법적 처벌 대상이 될 수 있습니다.

‘유통사 - 납품업체 - 3PL 업체’의 흐름으로 이어지는 전방위적인 개인정보보호 시스템 구축은 개인정보보호법 위반에 대한 기업의 법적 리스크를 최소화하고 안전하게 개인정보를 활용하기 위한 시스템 구축을 적극적으로 도입하고 있습니다.`,
}

export const contentScs03: ContentBoxInterface = {
  title: "DLP(Data Loss Prevention) 시스템",
  background: 'scs_title',
  content_list: [
    {
      image_list: [
        {
          image: DlpImage,
          name: 'DLP의 중요성',
          source: 'DLP의 중요성'
        }
      ],
      content: `정보유출방지(DLP)는 조직 내 중요 정보와 데이터를 보호하기 위해, 문서·이미지 등 저장된 파일 내 주요 정보를 탐지하고 저장매체, 출력, 파일 전송 등 다양한 경로를 통해 발생할 수 있는 유출을 차단함으로써 외부 유출을 예방하는 시스템입니다.

DLP 시스템은 이메일, 웹하드, 메신저 등 다양한 경로를 통한 정보 유출을 효과적으로 차단할 수 있습니다. 또한 설치와 관리가 용이하고, 사내 네트워크를 통한 데이터 전송을 집중적으로 감시할 수 있어 기업들이 필수적으로 도입하고 있습니다.`,
    }
  ]
}

export const contentScs04: ContentBoxInterface = {
  title: "ISO 27001",
  background: 'scs_title',
  content: `ISO 27001은 규모와 활동분야에 관계없이 모든 기업에 정보보안관리시스템을 구축, 구현, 유지 및 지속적으로 개선하기 위한 국제표준입니다. 기업의 조직이 소유하거나 처리하는 데이터의 보안과 관련된 위험을 관리하는 시스템을 구축하여 정보보안 리스크를 관리하고 있음을 입증하는데 사용됩니다.

ISO 27001은 사이버 범죄가 증가하고 새로운 위협이 끊임없이 등장함에 따라 조직이 위험을 인식하고 취약점을 사전에 파악해여 해결할 수 있도록 지원합니다.
`,
}

export const contentScs05: ContentBoxInterface = {
  title: "C-TPAT",
  background: 'scs_title',
  content: `미국 세관에서 실시하는 C-TPAT(Customs Trade Partnership Against Terrorism) 프로그램은 알 카에다에 의한 9.11 테러 후에 발효된 미국 세관당국과 미국 내 수입 관련 기업 간의 테러방지 협약이며, 2024년 기준 1만 개 이상의 업체가 이 협약에 가입하고 있습니다.

C-TPAT 심사를 통과하게 되면, 수입화물 통관 시 무작위 검사의 확률이 줄어들고, 검사가 필요한 경우에도 우선 처리되어 통관 지연을 최소화할 수 있습니다.

또한 C-TPAT 심사 통과 시 기업 전담 공급망 보안 전문가 배정, 육로 국경에서의 FAST(Free and Secure Trade) 레인 사용, 자연재해 및 테러 발생 시 비즈니스 조기 복구 우선권 부여 등의 혜택이 부여됩니다.`,
}

export const contentScs06: ContentBoxInterface = {
  title: "AEO",
  background: 'scs_title',
  content: `AEO인증 기업은 통관 절차에서 우선 처리되어 지연시간을 최소화하고, 빠른 배송을 통해 물류 비용을 절감할 수 있으며, 세금 유예와 통관 절차 간소화 등의 세금 혜택을 받을 수 있습니다.

AEO인증은 안전한 거래와 위험 관리를 보장하며, 불법 거래나 테러를 예방하는 보안 관리가 강화되며, 글로벌 무역 파트너들에게 신뢰를 주고, 법적 안정성과 국제적 규제 준수를 증명하여 법적 리스크를 최소화할 수 있습니다.

여러 나라에 생산 시설을 운영하는 다국적 기업은 AEO인증으로 글로벌 공급망에서 효율적인 통관과 물류처리를 받을 수 있습니다. 또한 해외 수출입이 많은 기업 및 해외 시장 진출을 목표로 하는 기업들은 AEO 인증을 통해 무역 효율성을 높이고, EU, 미국, 중국 등과의 거래에서 빠른 통관과 비용 절감을 실현할 수 있습니다.`,
}

export const contentScs07: ContentBoxInterface = {
  title: "COC(Code Of Conduct)",
  background: 'scs_title',
  content: `COC는 조직이나 기업이 구성원들에게 기대하는 행동 기준을 명확히 정의하는 규범입니다.

공급업체를 위한 행동강령(COC)은 아동노동, 강제노동, 차별 금지 등 국제노동기준의 준수 여부를 포함한 노동·인권 관련 항목과 함께, 작업장 안전, 법정 근로 조건, 복리후생 이행 등 현장 관리 실태 전반을 종합적으로 평가하는 기준입니다.

최근의 COC는 단일 공급업체의 준법 여부를 넘어서, 전체 공급망의 윤리성과 지속 가능성을 체계적으로 관리하는 방향으로 진화하고 있습니다.

COC는 조직이 투명하고 공정한 방식으로 운영되도록 보장하며, 규범을 준수함으로써 법적 리스크를 감소시키고, 구성원들이 공통된 가치와 행동 기준을 공유하여 긍정적인 조직문화를 형성하며, 윤리적 문제나 내부 갈등 발생 시 명확한 기준을 제공하여 효과적으로 대응할 수 있습니다.`,
}