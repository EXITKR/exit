"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
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
            <Link href="/contact_us">
                <div className="navi">
                    <span className={usePathname() === "/contact_us" ? "navi_text active" : "navi_text"}>문의 & 신청</span>
                </div>
            </Link>
        </div>
    </>
  );
}

export default Navigation