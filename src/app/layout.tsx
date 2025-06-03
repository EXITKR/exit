import type { Metadata } from "next";
import "./globals.css";
import Footer from "@components/footer/Footer";
import Header from "@components/header/Header";

export const metadata: Metadata = {
  title: "㈜EXIT | 주식회사 엑시트 :: 합리적인 인증 심사 & 컨설팅 기업",
  description: "EXIT는 시스템/ 제품/ 경영 인증컨설팅을 제공하는 인증 심사 및 컨설팅 기업입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
