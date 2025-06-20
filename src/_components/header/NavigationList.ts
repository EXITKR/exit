import { NavigationInterface } from "@interfaces/pagesInterface";

export const navigationList: NavigationInterface[] = [
    {
        url: "/business_info",
        name: "기업 소개",
        sub: [
            {
                url: "/business_info",
                name: "기업 소개",
            }
        ]
    },
    {
        url: "/iso_info",
        name: "ISO 인증",
        sub: [
            {
                url: "/iso_info",
                name: "ISO9001",
            },
            {
                url: "/iso_info",
                name: "ISO14001",
            },
            {
                url: "/iso_info",
                name: "ISO45001",
            },
        ]
    },
    {
        url: "/enterprise_info",
        name: "기업맞춤형 인증",
        sub: [
            {
                url: "/enterprise_info",
                name: "공급망 보안 (SCS)",
            },
            {
                url: "/enterprise_info",
                name: "직원 행동강령 (COC)",
            },
            {
                url: "/enterprise_info",
                name: "정보 보안 (DLP)",
            },
        ]
    },
    {
        url: "/product_info",
        name: "제품 인증",
        sub: [
            {
                url: "/product_info",
                name: "CE / UL",
            },
        ]
    },
    {
        url: "/business_info",
        name: "경영 컨설팅",
        sub: [
            {
                url: "/business_info",
                name: "경영 컨설팅",
            }
        ]
    },
]