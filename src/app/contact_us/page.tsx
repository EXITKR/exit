"use client"
import ActiveTab from "@components/buttons/ActiveTab";
import InquiryForm from "@components/contact_us/Inquiry";
import RequestForm from "@components/contact_us/Request";
import Loading from "@components/Loading";
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
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [isLoading, setLoading] = useState<boolean>(false)
  const [isMessage, setMessage] = useState<string>("")

  useEffect(() => {
    const index = params.get('index')
    setTabIdx(Number(index))
  }, [params])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
      handleResize();

      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  useEffect(() => {
    if (windowWidth <= 1000 && isTabIdx !== 0) {
      setTabIdx(0)
    }
  }, [windowWidth, isTabIdx])

  useEffect(() => {
    console.log(isLoading)
  }, [isLoading])
  return (
    <>
      {isLoading ? <Loading message={isMessage}/> : null}
      <div id="contact_us_page">
        <div className="inner_main contact_us_main">
          {windowWidth > 1000
            ?
            <ActiveTab tabs={tabList} index={isTabIdx} setIndex={(idx: number) => setTabIdx(idx)} />
            : null}

          {isTabIdx === 0 ?
            <InquiryForm
              setLoading={(status: boolean) => setLoading(status)}
              setMessage={(message: string) => setMessage(message)}
            />
            :
            <RequestForm
              setLoading={(status: boolean) => setLoading(status)}
              setMessage={(message: string) => setMessage(message)}
            />
          }
        </div>
      </div>
    </>
  );
}