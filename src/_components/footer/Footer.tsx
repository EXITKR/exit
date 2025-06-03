"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MdEmail } from "react-icons/md";
import { RiKakaoTalkFill } from "react-icons/ri";

const Footer = () => {
  const router = useRouter()
  return (
    <>
        <footer id="footer_pc">
            <div className="inner_main footer_main">
              <div className="top_section">
                <div className="info_section">
                  <span className="company_title">EXIT</span>
                  <div className="info_content">
                    <span className="company_name">주식회사 엑시트</span>
                    <span className="company_ceo">대표이사 :: 이승준</span>
                    <span className="company_ceo">개인정보관리 책임자 :: 이승준</span>
                    <span className="company_number">사업자 등록 번호 :: 701-86-03521</span>
                    <span className="company_address">주소 :: 충청남도 천안시 서북구 천안천4길 32 그린스타트업타운 (우: 31145)</span>
                    <span className="company_tel">Tel :: 010-8384-6126</span>
                    <span className="company_fax">Fax :: 0504-482-6126</span>
                    <span className="company_mail">e-mail :: exitinfo08@gmail.com</span>
                  </div>
                </div>
                <div className="menu_section">
                  <div className="menu menu_01">
                    <span className="menu_title" onClick={() => router.push("/")}>기업 소개</span>
                    <span className="menu_list" onClick={() => router.push("/")}>기업 소개</span>
                  </div>
                  <div className="menu menu_02">
                    <span className="menu_title" onClick={() => router.push("/iso_info?index=0")}>ISO 인증</span>
                    <span className="menu_list" onClick={() => router.push("/iso_info?index=0")}>ISO9001</span>
                    <span className="menu_list" onClick={() => router.push("/iso_info?index=1")}>ISO14001</span>
                    <span className="menu_list" onClick={() => router.push("/iso_info?index=2")}>ISO45001</span>
                    <span className="menu_list" onClick={() => router.push("/iso_info?index=3")}>심사</span>
                  </div>
                  <div className="menu menu_03">
                    <span className="menu_title" onClick={() => router.push("/enterprise_info?index=0")}>기업 맞춤형 인증</span>
                    <span className="menu_list" onClick={() => router.push("/enterprise_info?index=1")}>공급망 보안 (SCS)</span>
                    <span className="menu_list" onClick={() => router.push("/enterprise_info?index=2")}>직원 행동강령 (COC)</span>
                    <span className="menu_list" onClick={() => router.push("/enterprise_info?index=3")}>정보 보안 (DLP)</span>
                  </div>
                  <div className="menu menu_04">
                    <span className="menu_title" onClick={() => router.push("/product_info?index=0")}>제품 인증</span>
                    <span className="menu_list" onClick={() => router.push("/product_info?index=0")}>CE / UL</span>
                  </div>
                  <div className="menu menu_05">
                    <span className="menu_title" onClick={() => router.push("/business_info?index=0")}>경영 컨설팅</span>
                    <span className="menu_list" onClick={() => router.push("/business_info?index=0")}>경영 컨설팅</span>
                  </div>
                </div>
              </div>
              <div className="bot_section">
                <div className="contact_section">
                  <Link href="https://open.kakao.com/o/sl7JVmqh" target="blank">
                    <div className="icon_circle">
                      <RiKakaoTalkFill className="icon"/>
                    </div>
                  </Link>
                  <Link href="mailto:exitinfo08@gmail.com" target="blank">
                    <div className="icon_circle">
                      <MdEmail className="icon"/>
                    </div>
                  </Link>
                </div>
                <div className="copy_section">
                  <span className="copyright">Copyright ⓒ 2025 EXIT Co. All rights reserved.</span>
                </div>
              </div>
            </div>
        </footer>
    </>
  );
}

export default Footer