"use client"
import ActiveTab from "@components/buttons/ActiveTab";
import InquiryForm from "@components/contact_us/Inquiry";
import RequestForm from "@components/contact_us/Request";
import Loading from "@components/Loading";
import Title from "@components/Title";
import { activeTabsInterface } from "@interfaces/pagesInterface";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const ContactUs = () => {
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
            {isLoading ? <Loading message={isMessage} /> : null}
            <div id="contact_us_page">
                {isTabIdx === 0
                ?
                <Title title="문의하기" desc="다양한 문의를 기다리고 있습니다."/>
                :
                <Title title="인증 신청 및 설문" desc="귀 사의 무궁한 번영을 기원합니다. 본 양식은 계약 검토를 통한 심사 일수를 정확하게 산정하기 위한 것이니 해당되는 모든 항목을 정확하게 기록하여 주시기 바랍니다. 인증심사 중 기재된 정보와 다를 경우, 상황에 따라 심사 프로그램이 변경 될 수 있음을 안내해 드립니다."/>
                }
                <div className="inner_main page_inner contact_us_main">
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

export default ContactUs