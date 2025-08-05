import ContentBox from "@components/content_ui/Content";
import Title from "@components/Title";
import { contentScs04 } from "@utils/contents/ContentScs";
import { getMetadata } from "@utils/Metadata";
import type { Metadata } from "next";

export const metadata: Metadata = getMetadata("ISO 27001")

export default function Home() {
  return (
    <>
      <div id="content_page">
        <div className="inner_main page_inner">
          <ContentBox content_box={contentScs04} />
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