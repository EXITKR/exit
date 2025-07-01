import type { Metadata } from "next";
import "./globals.css";
import Footer from "@components/footer/Footer";
import Header from "@components/header/Header";
import { Suspense } from "react";
import { getMetadata } from "@utils/Metadata";

export const metadata: Metadata = getMetadata(null)

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
