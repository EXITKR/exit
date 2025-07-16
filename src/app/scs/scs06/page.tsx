import ContentBox from "@components/content_ui/Content";
import { contentScs06 } from "@components/contents/ContentScs";
import { getMetadata } from "@utils/Metadata";
import type { Metadata } from "next";

export const metadata: Metadata = getMetadata("COC (Code Of Conduct)")

export default function Home() {
  return (
    <>
    <div id="content_page">
      <div className="inner_main">
        <ContentBox content_box={contentScs06} />
      </div>
    </div>
    </>
  );
}