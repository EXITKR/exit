"use client"
import ActiveBtn from "@components/buttons/ActiveBtn";
import { navigationList } from "@components/header/NavigationList";
import Link from "next/link";
import { useRouter } from "next/navigation";

const HeaderSub = (props: {
    onMouse: number,
    setMouseOver: (index: number) => void
}) => {
    const router = useRouter()
    return (
        <>
            <div className={"header_sub " + (props.onMouse !== 0 ? "header-on" : "header-no")}
                onMouseOver={() => props.setMouseOver(1)}
                onMouseOut={() => props.setMouseOver(0)}>
                <div className="inner_main header_sub_main">
                    <div className="header_sub_top">
                        {navigationList.map((val, idx) => (
                            <div className="header_sub_navi" key={idx}>
                                {val.sub.map((item, index) => (
                                    <Link href={item.url} key={index}
                                        onMouseOver={() => props.setMouseOver(index + 1)}
                                        onMouseOut={() => props.setMouseOver(0)}>
                                        <div className="navi">
                                            <span className="navi_text">{item.name}</span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        ))}
                    </div>
                    <div className="header_sub_bot">
                        <ActiveBtn style="default" name="문의하기" onClick={() => router.push("/contact_us?index=0")} disabled={false} />
                        <ActiveBtn style="filled" name="인증 신청하기" onClick={() => router.push("/contact_us?index=1")} disabled={false} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default HeaderSub