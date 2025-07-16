import ContentBox from "@components/content_ui/Content";
import { contentQesg05 } from "@components/contents/ContentQesg";
import { getMetadata } from "@utils/Metadata";
import type { Metadata } from "next";

export const metadata: Metadata = getMetadata("ISO 26000")

export default function Home() {
  return (
    <>
    <div id="content_page">
      <div className="inner_main">
        <ContentBox content_box={contentQesg05} />
      </div>
    </div>
    </>
  );
}