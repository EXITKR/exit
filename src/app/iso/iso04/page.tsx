import ContentBox from "@components/content_ui/Content";
import { contentIso04 } from "@utils/contents/ContentIso";
import { getMetadata } from "@utils/Metadata";
import type { Metadata } from "next";

export const metadata: Metadata = getMetadata("CE / UL")

export default function Home() {
  return (
    <>
    <div id="content_page">
      <div className="inner_main page_inner">
        <ContentBox content_box={contentIso04} />
      </div>
    </div>
    </>
  );
}