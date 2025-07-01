import ContentBox from "@components/content_ui/Content";
import { contentDummy } from "@components/contents/ContentDummy";
import { getMetadata } from "@utils/Metadata";
import type { Metadata } from "next";

export const metadata: Metadata = getMetadata("이용약관")

export default function Home() {
  return (
    <>
    <div id="terms_of_use_page">
      <div className="inner_main">
        <ContentBox content_box={contentDummy} />
      </div>
    </div>
    </>
  );
}