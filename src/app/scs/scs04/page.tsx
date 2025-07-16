import ContentBox from "@components/content_ui/Content";
import { contentScs04 } from "@components/contents/ContentScs";
import { getMetadata } from "@utils/Metadata";
import type { Metadata } from "next";

export const metadata: Metadata = getMetadata("ISO 27001")

export default function Home() {
  return (
    <>
    <div id="content_page">
      <div className="inner_main">
        <ContentBox content_box={contentScs04} />
      </div>
    </div>
    </>
  );
}