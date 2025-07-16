import ContactUs from "@components/contact_us/ContactUs";
import { getMetadata } from "@utils/Metadata";
import type { Metadata } from "next";

export const metadata: Metadata = getMetadata("문의 & 인증신청")

export default function Home() {
  return (
    <>
      <ContactUs/>
    </>
  );
}