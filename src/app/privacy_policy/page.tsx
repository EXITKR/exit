import ContentBox from "@components/content_ui/Content";
import Title from "@components/Title";
import { contentPrivacyPolicy } from "@utils/contents/ContentPrivacyPolicy";
import { getMetadata } from "@utils/Metadata";
import type { Metadata } from "next";

export const metadata: Metadata = getMetadata("개인정보처리방침")

export default function Home() {
  return (
    <>
    <div id="privacy_policy_page">
      <Title title="개인정보처리방침" desc="" />
      <div className="inner_main page_inner">
        <ContentBox content_box={contentPrivacyPolicy} />
      </div>
    </div>
    </>
  );
}