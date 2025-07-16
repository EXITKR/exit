import ContentBox from "@components/content_ui/Content";
import { contentIso01 } from "@components/contents/ContentIso";
import { getMetadata } from "@utils/Metadata";
import type { Metadata } from "next";

export const metadata: Metadata = getMetadata("ISO 9001")

export default function Home() {
  return (
    <>
    <div id="content_page">
      <div className="inner_main">
        <ContentBox content_box={contentIso01} />
      </div>
    </div>
    </>
  );
}