import ContentBox from "@components/content_ui/Content";
import { contentScs05 } from "@components/contents/ContentScs";
import { getMetadata } from "@utils/Metadata";
import type { Metadata } from "next";

export const metadata: Metadata = getMetadata("C-TPAT / AEO")

export default function Home() {
  return (
    <>
    <div id="content_page">
      <div className="inner_main page_inner">
        <ContentBox content_box={contentScs05} />
      </div>
    </div>
    </>
  );
}