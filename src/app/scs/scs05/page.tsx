import PaginationBtn from "@components/buttons/PaginationBtn";
import Scs05 from "@components/pages/scs/Scs05";
import Title from "@components/Title";
import { getMetadata } from "@utils/Metadata";
import type { Metadata } from "next";

export const metadata: Metadata = getMetadata("C-TPAT / AEO")

export default function Home() {
  return (
    <>
      <div id="scs_page">
        <Title title="C-TPAT / AEO" desc="Customized SCS (Supply Chain Security)" />
        <Scs05/>
        <PaginationBtn
          prev_name="정보보호서비스"
          prev_url="/scs/scs02"
          prev_disabled={false}
          next_name="COC"
          next_url="/scs/scs06"
          next_disabled={false}
        />
      </div>
    </>
  );
}