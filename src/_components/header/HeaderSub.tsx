"use client"
import { navigationList } from "@utils/NavigationList";
import { useRouter } from "next/navigation";

const HeaderSub = (props: {
    onMobile: number,
    onMouse: boolean,
    setMouseOver: (status: boolean) => void
}) => {
    const router = useRouter()
    return (
        <>
            <div className={"header_sub " + (props.onMouse ? "header-on" : "header-no")}>
                <div className="inner_main header_sub_main">
                    <div className="header_sub_top">
                        {navigationList.map((val, idx) => (
                            <div className="header_sub_navi" key={idx}>
                                <div className="navi">
                                    <span className="navi_title">{val.name}</span>
                                </div>
                                {val.sub.map((item, index) => (
                                    <div className="navi" key={index} onClick={() => {
                                        router.push(item.url)
                                        props.setMouseOver(false)
                                    }}>
                                        <span className="navi_text">{item.name}</span>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default HeaderSub