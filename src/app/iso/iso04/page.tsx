import PaginationBtn from "@components/buttons/PaginationBtn";
import Title from "@components/Title";
import Iso04 from "@components/pages/iso/Iso04";
import { getMetadata } from "@utils/Metadata";
import type { Metadata } from "next";
import SubNavigation from "@components/header/SubNavigation";

export const metadata: Metadata = getMetadata("CE / UL")

export default function Home() {
  return (
    <>
      <div id="iso_page">
        <Title title="CE / UL" desc="시스템 인증" />
        <SubNavigation type={2}/>
        <Iso04/>
        <PaginationBtn
          prev_name="ISO 45001"
          prev_url="/iso/iso03"
          prev_disabled={false}
          next_name=""
          next_url=""
          next_disabled={true}
        />
      </div>
    </>
  );
}