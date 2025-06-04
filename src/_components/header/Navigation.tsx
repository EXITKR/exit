"use client"
import ActiveBtn from "@components/buttons/ActiveBtn";
import { sendContactEmail } from "@utils/mail/mail";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navigation = () => {
    const router = useRouter()
    const onSubmit = async () => {
        console.log("메일 발송 중")
        const result = await sendContactEmail(); // <-- Server Action 호출
        if (result.success) {
            alert(result.message);
            console.log("메일 발송 성공")
        } else {
            alert(result.message);
            console.log("메일 발송 실패")
        }
    }
    return (
        <>
            <div className="navi_section">
                <Link href="/iso_info">
                    <div className="navi">
                        <span className={usePathname() === "/iso_info" ? "navi_text active" : "navi_text"}>ISO 인증</span>
                    </div>
                </Link>
                <Link href="/enterprise_info">
                    <div className="navi">
                        <span className={usePathname() === "/enterprise_info" ? "navi_text active" : "navi_text"}>기업 맞춤형 인증</span>
                    </div>
                </Link>
                <Link href="/product_info">
                    <div className="navi">
                        <span className={usePathname() === "/product_info" ? "navi_text active" : "navi_text"}>제품인증</span>
                    </div>
                </Link>
                <Link href="/business_info">
                    <div className="navi">
                        <span className={usePathname() === "/business_info" ? "navi_text active" : "navi_text"}>경영컨설팅</span>
                    </div>
                </Link>
                {/* <Link href="/contact_us">
                <div className="navi">
                    <span className={usePathname() === "/contact_us" ? "navi_text active" : "navi_text"}>문의 & 신청</span>
                </div>
            </Link> */}
                <ActiveBtn style="default" name="문의하기" onClick={() => router.push("/contact_us?index=0")} />
                <ActiveBtn style="filled" name="심사 신청하기" onClick={() => router.push("/contact_us?index=1")} />
            </div>
        </>
    );
}

export default Navigation