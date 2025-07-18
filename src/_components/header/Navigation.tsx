"use client"
import { usePathname, useRouter } from "next/navigation";

const Navigation = (props: {
    setMouseOver: (status: boolean) => void
}) => {
    const router = useRouter()
    const pathname = usePathname()
    return (
        <>
            <div className="navi_section">
                <div className="navi" onClick={() => {
                    router.push("/overview")
                    props.setMouseOver(false)
                }}>
                    <span className={pathname === "/overview" ? "navi_text active" : "navi_text"}>OVERVIEW</span>
                </div>
                <div className="navi" onClick={() => {
                    router.push("/contact_us")
                    props.setMouseOver(false)
                }}>
                    <span className={pathname === "/contact_us" ? "navi_text active" : "navi_text"}>CONTACT US</span>
                </div>
            </div>
        </>
    );
}

export default Navigation