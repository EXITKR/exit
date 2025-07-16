"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MdEmail, MdSms } from "react-icons/md";
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
              <span className="company_title" onClick={() => router.push("/")}>{config.company_en}</span>
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
            {/* <div className="menu_section">
              {navigationList.map((val, idx) => (
                <div className={"menu menu_" + (idx + 1).toString().padStart(2, '0')} key={idx}>
                  <span className="menu_title" onClick={() => router.push(val.url)}>{val.name}</span>
                  {val.sub.map((item, index) => (
                    <span className="menu_list" onClick={() => router.push(item.url)} key={index}>{item.name}</span>
                  ))}
                </div>
              ))}
            </div> */}
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
              <Link href={"sms:" + config.tel_number} target="blank">
                <div className="icon_circle">
                  <MdSms className="icon" />
                </div>
              </Link>
              <ActiveBtn style="white ctr_mb" name="문의하기" onClick={() => router.push("/contact_us?index=0")} disabled={false} />
              <ActiveBtn style="white ctr_mb" name="인증 신청하기" onClick={() => router.push("/contact_us?index=1")} disabled={false} />
            </div>
            <div className="copy_section">
              <div className="terms_section">
                <span className="terms" onClick={() => router.push("/terms_of_use")}>이용약관</span>
                <span className="terms" onClick={() => router.push("/privacy_policy")}>개인정보처리방침</span>
              </div>
              <span className="copyright">&copy; 2025 {config.company_en} All rights reserved.</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer