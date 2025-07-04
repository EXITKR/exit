import ContentBox from "@components/content_ui/Content";
import { contentDummy } from "@components/contents/ContentDummy";
import { getMetadata } from "@utils/Metadata";
import type { Metadata } from "next";

export const metadata: Metadata = getMetadata("개인정보처리방침")

export default function Home() {
  return (
    <>
    <div id="privacy_policy_page">
      <div className="inner_main">
        <ContentBox content_box={contentDummy} />
      </div>
    </div>
    </>
  );
}