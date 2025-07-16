import ContentBox from "@components/content_ui/Content";
import { contentScs02 } from "@components/contents/ContentScs";
import { getMetadata } from "@utils/Metadata";
import type { Metadata } from "next";

export const metadata: Metadata = getMetadata("개인정보보호 시스템 및 프로세스 구축")

export default function Home() {
  return (
    <>
    <div id="content_page">
      <div className="inner_main">
        <ContentBox content_box={contentScs02} />
      </div>
    </div>
    </>
  );
}