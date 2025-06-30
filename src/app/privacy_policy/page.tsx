import ContentBox from "@components/content_ui/Content";
import { contentDummy } from "@components/contents/ContentDummy";

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