"use client"
import ActiveTab from "@components/buttons/ActiveTab";
import InquiryForm from "@components/contact_us/Inquiry";
import RequestForm from "@components/contact_us/Request";
import { activeTabsInterface } from "@interfaces/pagesInterface";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const params = useSearchParams()
  const tabList: activeTabsInterface[] = [
    { name: "일반 문의" },
    { name: "인증 신청" },
  ]
  const [isTabIdx, setTabIdx] = useState<number>(0)

  useEffect(() => {
    const index = params.get('index')
    console.log(index)
    setTabIdx(Number(index))
  }, [])
  return (
    <>
      <div id="contact_us_page">
        <div className="inner_main contact_us_main">
          <ActiveTab tabs={tabList} index={isTabIdx} setIndex={(idx: number) => setTabIdx(idx)} />

          {isTabIdx === 0 ?
          <InquiryForm/>
          :
          <RequestForm/>
          }
        </div>
      </div>
    </>
  );
}