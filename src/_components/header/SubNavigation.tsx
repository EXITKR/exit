"use client"
import { navigationList } from "@utils/NavigationList";
import { usePathname, useRouter } from "next/navigation";

const SubNavigation = (props: {
    type: number
}) => {
    const router = useRouter()
    const pathname = usePathname()
    return (
        <>
            <div className="sub_navigation">
                {navigationList.filter(item => item.type === props.type)[0].sub.map((item, index) => (
                    <div className="navi" key={index} onClick={() => {
                        router.push(item.url)
                    }}>
                        <span className={pathname === item.url ? "navi_text active" : "navi_text"}>{item.name}</span>
                    </div>
                ))}
            </div>
        </>
    );
}

export default SubNavigation