import ContentBox from "@components/content_ui/Content";
import { contentQesg03 } from "@utils/contents/ContentQesg";
import { getMetadata } from "@utils/Metadata";
import type { Metadata } from "next";

export const metadata: Metadata = getMetadata("공급망 ESG 심사 전략")

export default function Home() {
  return (
    <>
    <div id="content_page">
      <div className="inner_main page_inner">
        <ContentBox content_box={contentQesg03} />
      </div>
    </div>
    </>
  );
}