"use client"
import ActiveTab from "@components/buttons/ActiveTab";
import ContentBox from "@components/content_ui/Content";
import { activeTabsInterface } from "@interfaces/pagesInterface";
import { contentIso04, contentIso05 } from "@utils/contents/ContentIso";
import { useState } from "react";

export default function Home() {
  const tabList: activeTabsInterface[] = [
    { name: "유럽인증 CE" },
    { name: "미주인증 UL" },
  ]
  const [isTabIdx, setTabIdx] = useState<number>(0)
  const switchContent = () => {
    switch (isTabIdx) {
      case 0:
        return <ContentBox content_box={contentIso04} />
      case 1:
        return <ContentBox content_box={contentIso05} />
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