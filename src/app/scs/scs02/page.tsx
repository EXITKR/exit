import PaginationBtn from "@components/buttons/PaginationBtn";
import SubNavigation from "@components/header/SubNavigation";
import Scs02 from "@components/pages/scs/Scs02";
import Title from "@components/Title";
import { getMetadata } from "@utils/Metadata";
import type { Metadata } from "next";

export const metadata: Metadata = getMetadata("정보보호서비스")

export default function Home() {
  return (
    <>
      <div id="scs_page">
        <Title title="정보보호서비스" desc="Customized SCS (Supply Chain Security)" />
        <SubNavigation type={1}/>
        <Scs02/>
        <PaginationBtn
          prev_name="Customized SCS는?"
          prev_url="/scs/scs01"
          prev_disabled={false}
          next_name="C-TPAT / AEO"
          next_url="/scs/scs05"
          next_disabled={false}
        />
      </div>
    </>
  );
}