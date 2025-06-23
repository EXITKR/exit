import type { Metadata } from "next";
import "./globals.css";
import Footer from "@components/footer/Footer";
import Header from "@components/header/Header";
import { getConfig } from "@utils/Config";
import { Suspense } from "react";

const config = getConfig()

export const metadata: Metadata = {
  title: config.company_kr + " - " + config.sub_description,
  description: config.description,
  icons: {
    icon: "/favicon.ico"
  },
  openGraph: {
    title: config.company_kr + " - " + config.sub_description,
    description: config.description,
    url: "https://exitco.kr",
    images: [
      {
        url: "../../assets/imgs/logo/exit_og.png",
        width: "1200",
        height: "630",
        alt: "exit_og"
      }
    ],
    locale: "ko_KR"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Suspense>
          {children}
        </Suspense>
        <Footer />
      </body>
    </html>
  );
}
