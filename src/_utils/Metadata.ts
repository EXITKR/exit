import { getConfig } from "@utils/Config";
import type { Metadata } from "next";

export const getMetadata = (pathname: string | null) => {
    const config = getConfig()

    const TITLE = ( pathname ? pathname : config.sub_description ) + " - " + config.company_kr

    const metadata: Metadata = {
        title: TITLE,
        description: config.description,
        icons: {
            icon: "/favicon.ico"
        },
        openGraph: {
            title: TITLE,
            description: config.description,
            url: "https://exitco.kr",
            images: [
                {
                    url: "https://raw.githubusercontent.com/EXITKR/exit/refs/heads/main/assets/imgs/logo/exit_og.png",
                    width: "1100",
                    height: "740",
                    alt: "exit_og"
                }
            ],
            locale: "ko_KR"
        },
    };

    return metadata
}