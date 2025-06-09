"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MdEmail } from "react-icons/md";
import { RiKakaoTalkFill } from "react-icons/ri";
import { getConfig } from "@utils/Config";
import ActiveBtn from "@components/buttons/ActiveBtn";

const Footer = () => {
  const router = useRouter()
  const config = getConfig()
  return (
    <>
      <footer id="footer_pc">
        <div className="inner_main footer_main">
          <div className="top_section">
            <div className="info_section">
              <span className="company_title">{config.company_en}</span>
              <div className="info_content">
                <span className="company_name">{config.company_kr}</span>
                <span className="company_ceo">대표이사 :: {config.ceo}</span>
                <span className="company_ceo">개인정보관리 책임자 :: {config.duty}</span>
                <span className="company_number">사업자 등록 번호 :: {config.bs_number}</span>
                <span className="company_address">주소 :: {config.address}</span>
                <span className="company_tel">Tel :: {config.tel_number}</span>
                <span className="company_fax">Fax :: {config.fax_number}</span>
                <span className="company_mail">e-mail :: {config.email}</span>
              </div>
            </div>
            <div className="menu_section">
              <div className="menu menu_01">
                <span className="menu_title" onClick={() => router.push("/")}>기업 소개</span>
                <span className="menu_list" onClick={() => router.push("/")}>기업 소개</span>
              </div>
              <div className="menu menu_02">
                <span className="menu_title" onClick={() => router.push("/iso_info?index=0")}>ISO 인증</span>
                {config.iso_info.i01 ? <span className="menu_list" onClick={() => router.push("/iso_info?index=0")}>ISO9001</span> : null}
                {config.iso_info.i02 ? <span className="menu_list" onClick={() => router.push("/iso_info?index=1")}>ISO14001</span> : null}
                {config.iso_info.i03 ? <span className="menu_list" onClick={() => router.push("/iso_info?index=2")}>ISO45001</span> : null}
                {config.iso_info.i04 ? <span className="menu_list" onClick={() => router.push("/iso_info?index=3")}>심사</span> : null}
              </div>
              <div className="menu menu_03">
                <span className="menu_title" onClick={() => router.push("/enterprise_info?index=0")}>기업 맞춤형 인증</span>
                {config.enterprise_info.e01 ? <span className="menu_list" onClick={() => router.push("/enterprise_info?index=1")}>공급망 보안 (SCS)</span> : null}
                {config.enterprise_info.e02 ? <span className="menu_list" onClick={() => router.push("/enterprise_info?index=2")}>직원 행동강령 (COC)</span> : null}
                {config.enterprise_info.e03 ? <span className="menu_list" onClick={() => router.push("/enterprise_info?index=3")}>정보 보안 (DLP)</span> : null}
              </div>
              <div className="menu menu_04">
                <span className="menu_title" onClick={() => router.push("/product_info?index=0")}>제품 인증</span>
                {config.product_info.p01 ? <span className="menu_list" onClick={() => router.push("/product_info?index=0")}>CE / UL</span> : null}
              </div>
              <div className="menu menu_05">
                <span className="menu_title" onClick={() => router.push("/business_info?index=0")}>경영 컨설팅</span>
                {config.business_info.b01 ? <span className="menu_list" onClick={() => router.push("/business_info?index=0")}>경영 컨설팅</span> : null}
              </div>
            </div>
          </div>
          <div className="bot_section">
            <div className="contact_section">
              <Link href={config.kakao} target="blank">
                <div className="icon_circle">
                  <RiKakaoTalkFill className="icon" />
                </div>
              </Link>
              <Link href={"mailto:" + config.email} target="blank">
                <div className="icon_circle">
                  <MdEmail className="icon" />
                </div>
              </Link>
              <ActiveBtn style="white" name="문의하기" onClick={() => router.push("/contact_us?index=0")} disabled={false} />
              <ActiveBtn style="white" name="인증 신청하기" onClick={() => router.push("/contact_us?index=1")} disabled={false} />
            </div>
            <div className="copy_section">
              <span className="copyright">&copy; 2025 {config.company_en} All rights reserved.</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer