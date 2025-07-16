import ContentBox from "@components/content_ui/Content";
import { contentIso02 } from "@components/contents/ContentIso";
import { getMetadata } from "@utils/Metadata";
import type { Metadata } from "next";

export const metadata: Metadata = getMetadata("ISO 14001")

export default function Home() {
  return (
    <>
    <div id="content_page">
      <div className="inner_main page_inner">
        <ContentBox content_box={contentIso02} />
      </div>
    </div>
    </>
  );
}