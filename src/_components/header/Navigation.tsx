"use client"
import { navigationList } from "@utils/NavigationList";
import { usePathname, useRouter } from "next/navigation";

const Navigation = (props: {
    setMouseOver: (status: boolean) => void
}) => {
    const router = useRouter()
    const pathname = usePathname()
    return (
        <>
            <div className="navi_section">
                {navigationList.map((item, index) => (
                    <div className="navi" key={index} onClick={() => {
                        router.push(item.url)
                    }}
                    onMouseOver={() => {
                        props.setMouseOver(true)
                    }}>
                        <span className={pathname === item.url ? "navi_text active" : "navi_text"}>{item.name}</span>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Navigation