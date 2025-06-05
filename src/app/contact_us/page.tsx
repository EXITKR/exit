"use client"
import ActiveTab from "@components/buttons/ActiveTab";
import InquiryForm from "@components/contact_us/Inquiry";
import { activeTabsInterface } from "@interfaces/pagesInterface";
import { useState } from "react";

export default function Home() {
  const tabList: activeTabsInterface[] = [
    { name: "일반 문의" },
    { name: "심사 신청" },
  ]
  const [isTabIdx, setTabIdx] = useState<number>(0)
  return (
    <>
      <div id="contact_us_page">
        <div className="inner_main contact_us_main">
          <ActiveTab tabs={tabList} index={isTabIdx} setIndex={(idx: number) => setTabIdx(idx)} />

          {isTabIdx === 0 ?
          <>
          <InquiryForm/>
          </>
          :
          <></>
          }
        </div>
      </div>
    </>
  );
}