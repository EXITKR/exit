"use client"
import ActiveTab from "@components/buttons/ActiveTab";
import ContentBox from "@components/content_ui/Content";
import { activeTabsInterface } from "@interfaces/pagesInterface";
import { contentScs05, contentScs06 } from "@utils/contents/ContentScs";
import { useState } from "react";

export default function Home() {
  const tabList: activeTabsInterface[] = [
    { name: "C-TPAT" },
    { name: "AEO" },
  ]
  const [isTabIdx, setTabIdx] = useState<number>(0)
  const switchContent = () => {
    switch (isTabIdx) {
      case 0:
        return <ContentBox content_box={contentScs05} />
      case 1:
        return <ContentBox content_box={contentScs06} />
    }
  }
  return (
    <>
      <div id="content_page">
        <div className="inner_main page_inner">
          <ActiveTab tabs={tabList} index={isTabIdx} setIndex={(idx: number) => setTabIdx(idx)} />
          {switchContent()}
        </div>
      </div>
    </>
  );
}