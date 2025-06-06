import type { Metadata } from "next";
import "./globals.css";
import Footer from "@components/footer/Footer";
import Header from "@components/header/Header";
import { getConfig } from "@utils/Config";
import { Suspense } from "react";

const config = getConfig()

export const metadata: Metadata = {
  title: config.company_kr + " | " + config.sub_description,
  description: config.description,
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
