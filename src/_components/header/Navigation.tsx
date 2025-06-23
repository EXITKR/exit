"use client"
import { navigationList } from "@components/header/NavigationList";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = (props: {
    setMouseOver: (status: boolean) => void
}) => {
    const pathname = usePathname()
    return (
        <>
            <div className="navi_section">
                {navigationList.map((item, index) => (
                    <Link href={item.url} key={index}
                        onMouseOver={() => props.setMouseOver(true)}
                        onMouseOut={() => props.setMouseOver(false)}>
                        <div className="navi">
                            <span className={pathname === item.url ? "navi_text active" : "navi_text"}>{item.name}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
}

export default Navigation