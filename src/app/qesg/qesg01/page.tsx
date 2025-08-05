import PaginationBtn from "@components/buttons/PaginationBtn";
import Title from "@components/Title";
import { getMetadata } from "@utils/Metadata";
import type { Metadata } from "next";
import Image from "next/image";
import ImgEsg from "@imgs/contents/esg_01.png"

export const metadata: Metadata = getMetadata("공급망 ESG는 무엇인가?")

export default function Home() {
  return (
    <>
      <div id="qesg_page">
        <Title title="공급망 ESG는 무엇인가?" desc="공급망 ESG 심사" />
        <div className="inner_main page_inner">
          <div className="content_box">
            <div className="content_box_content title gc-1-4">
              <span className="content_text">
                <span className=" ">최근 산업계의 최대 화두는 ‘공급망(Supply Chain)’이라 할 수 있습니다.</span>
              </span>
            </div>
            <div className="content_img gc-1-4">
              <Image src={ImgEsg} alt="dummy" className="img"/>
            </div>
            <div className="content_box_content gc-1-4 sect_point">
              <span className="content_text">
                공급망은 제품생산을 위한 원재료(raw material)부터 완제품(final product)이 최종소비자(end user)에게 전달되기까지의 재화, 서비스 및 정보의 흐름이 이뤄지는 연결망을 뜻합니다.
              </span>
            </div>
            <div className="content_box_content gc-1-4 sect_point">
              <span className="content_text">
                <span className="">
                  공급망 ESG란 기업의 지속가능경영을 위한 리스크 관리를 위해 원자재 구매에서부터 제품의 제조, 제품의 서비스 개발, 유통, 보관, 판매, 소비자의 사용, 폐기물 처리에 이르기까지 가치사슬 전반에 ESG 개념(환경적 책임, 사회적 책임, 윤리적 경영)을 적용하여, 공급업체를 선정하고 관리하는 것을 의미합니다.
                </span>
              </span>
            </div>
          </div>
        </div>
        <PaginationBtn
          prev_name=""
          prev_url=""
          prev_disabled={true}
          next_name="공급망 ESG 이슈"
          next_url="/qesg/qesg02"
          next_disabled={false}
        />
      </div>
    </>
  );
}