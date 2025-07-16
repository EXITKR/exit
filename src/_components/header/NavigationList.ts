import { NavigationInterface } from "@interfaces/pagesInterface";

export const navigationList: NavigationInterface[] = [
    {
        url: "/qesg/qesg01",
        name: "공급망 ESG 심사 ",
        sub: [
            {
                url: "/qesg/qesg01",
                name: "개요 및 정의",
            },
            {
                url: "/qesg/qesg02",
                name: "이슈",
            },
            {
                url: "/qesg/qesg03",
                name: "전략",
            },
            {
                url: "/qesg/qesg04",
                name: "중요성",
            },
            {
                url: "/qesg/qesg05",
                name: "ISO26000",
            },
        ]
    },
    {
        url: "/scs/scs01",
        name: "맞춤형 공급망 보안",
        sub: [
            {
                url: "/scs/scs01",
                name: "맞춤형 공급망 보안이란?",
            },
            {
                url: "/scs/scs02",
                name: "개인정보보호 시스템 구축",
            },
            {
                url: "/scs/scs03",
                name: "데이터손실방지 시스템",
            },
            {
                url: "/scs/scs04",
                name: "ISO27001",
            },
            {
                url: "/scs/scs05",
                name: "C-TPAT / AEO",
            },
            {
                url: "/scs/scs06",
                name: "COC (Code Of Conduct)",
            },
        ]
    },
    {
        url: "/iso/iso01",
        name: "시스템 인증",
        sub: [
            {
                url: "/iso/iso01",
                name: "ISO9001",
            },
            {
                url: "/iso/iso02",
                name: "ISO14001",
            },
            {
                url: "/iso/iso03",
                name: "ISO45001",
            },
            {
                url: "/iso/iso04",
                name: "CE / UL",
            },
        ]
    },
    {
        url: "/overview",
        name: "회사소개",
        sub: [
            {
                url: "/overview",
                name: "OVERVIEW",
            },
            {
                url: "/contact_us",
                name: "CONTACT US",
            },
        ]
    },
]