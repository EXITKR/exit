import ContentBox from "@components/content_ui/Content";
import Title from "@components/Title";
import { contentScs03 } from "@utils/contents/ContentScs";
import { getMetadata } from "@utils/Metadata";
import type { Metadata } from "next";

export const metadata: Metadata = getMetadata("데이터손실방지 시스템")

export default function Home() {
  return (
    <>
      <div id="content_page">
        <div className="inner_main page_inner">
          <ContentBox content_box={contentScs03} />
        </div>

        <Title title="" desc="" />
        <div className="inner_main page_inner">
          <div className="content_box">
            <div className="content_box_content">
              <span className="content_text">
                <span className=" "></span>
                <br /><br />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}