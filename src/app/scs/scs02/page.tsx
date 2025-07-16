"use client"
import ActiveTab from "@components/buttons/ActiveTab";
import ContentBox from "@components/content_ui/Content";
import { activeTabsInterface } from "@interfaces/pagesInterface";
import { contentScs02, contentScs03, contentScs04 } from "@utils/contents/ContentScs";
import { useState } from "react";

export default function Home() {
  const tabList: activeTabsInterface[] = [
    { name: "개인정보보호 시스템 및 프로세스 구축" },
    { name: "DLP( Data Loss Prevention) 시스템" },
    { name: "ISO 27001" },
  ]
  const [isTabIdx, setTabIdx] = useState<number>(0)
  const switchContent = () => {
    switch (isTabIdx) {
      case 0:
        return <ContentBox content_box={contentScs02} />
      case 1:
        return <ContentBox content_box={contentScs03} />
      case 2:
        return <ContentBox content_box={contentScs04} />
      default:
        return <ContentBox content_box={contentScs02} />
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