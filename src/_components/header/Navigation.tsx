"use client"
import { navigationList } from "@components/header/NavigationList";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = (props: {
    setMouseOver: (index: number) => void
}) => {
    const pathname = usePathname()
    return (
        <>
            <div className="navi_section">
                {navigationList.map((item, index) => (
                    <Link href={item.url} key={index}
                        onMouseOver={() => props.setMouseOver(index + 1)}
                        onMouseOut={() => props.setMouseOver(0)}>
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