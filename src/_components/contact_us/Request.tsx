import ActiveBtn from "@components/buttons/ActiveBtn";
import Form111 from "@components/contact_us/request/Form111";
import Form112 from "@components/contact_us/request/Form112";
import Form121 from "@components/contact_us/request/Form121";
import Form122 from "@components/contact_us/request/Form122";
import Form123 from "@components/contact_us/request/Form123";
import Form124 from "@components/contact_us/request/Form124";
import Form125 from "@components/contact_us/request/Form125";
import Form211 from "@components/contact_us/request/Form211";
import Form212 from "@components/contact_us/request/Form212";
import Form213 from "@components/contact_us/request/Form213";
import Form214 from "@components/contact_us/request/Form214";
import Form215 from "@components/contact_us/request/Form215";
import Form216 from "@components/contact_us/request/Form216";
import Form221 from "@components/contact_us/request/Form221";
import Form231 from "@components/contact_us/request/Form231";
import { sendContactEmail } from "@utils/mail/mail";
import { useState } from "react";

const RequestForm = () => {
    const [isCompanyList, setCompanyList] = useState<number>(3)
    const [isPositionList, setPositionList] = useState<number>(3)
    const handleSubmit = async (formData: FormData) => {
        const result = await sendContactEmail(formData, '심사신청');
        if (result.success) {
            alert(result.message);
        } else {
            alert(result.message);
        }
    }
    return (
        <>
            <span className="title">인증 신청 및 설문</span>
            <span className="desc">귀 사의 무궁한 번영을 기원합니다. 본 양식은 계약 검토를 통한 심사 일수를 정확하게 산정하기 위한 것이니 해당되는 모든 항목을 정확하게 기록하여 주시기 바랍니다. 인증심사 중 기재된 정보와 다를 경우, 상황에 따라 심사 프로그램이 변경 될 수 있음을 안내해 드립니다.</span>
            <span className="sort_title">작성법</span>
            <div className="how_to_section">
                <span className="how_to"><a href="#1_0">[1. 기본정보]</a> 항목은 필수 기재 사항입니다.</span>
                <span className="how_to"><a href="#1_2">[1.2]</a> 인원 정보는 대표자 및 일용직을 포함한 각 사업장별 인원수를 작성 바랍니다.</span>
                <span className="how_to"><a href="#2_1">[2.1]</a> 신청하시는 표준 및 범위를 명확히 기재 바랍니다. (복수 선택 가능)</span>
                <span className="how_to"><a href="#2_2">[2.2]</a> 타 기관에서 인증전환시 반드시 기재 바라며, 인증의 유효성 유무에 따라 전환이 거부될 수도 있습니다.</span>
                <span className="how_to"><a href="#2_5">[2.5]</a> 경영시스템과 관련하여 자문을 받은 경우 필히 작성 바랍니다.</span>
                <span className="how_to"><a href="#2_6">[2.6]</a> 신청서 제출시, 첨부서류 리스트를 참고하시어 해당 서류를 반드시 제출 바랍니다.</span>
                <span className="how_to"><a href="#3_0">[3. 추가 기재사항]</a> 항목은 해당되는 경우만 작성 바랍니다.</span>
            </div>
            <div className="request_form">
                <form action={handleSubmit}>
                    <input type="hidden" id="company_list" name="company_list" value={isCompanyList.toString()} />
                    <input type="hidden" id="position_list" name="position_list" value={isPositionList.toString()} />
                    <span className="sort_title" id="1_0">1. 기본정보</span>
                    <span className="sort_sub_title" id="1_1">1.1 일반정보</span>
                    <Form111 />
                    <Form112 />
                    <span className="sort_sub_title" id="1_2">1.2 본사 및 추가 사업장에 대한 인원 정보</span>
                    <Form121 />
                    <Form122 is_company_list={isCompanyList}/>
                    <div className="add_and_rm">
                        <ActiveBtn name="+" style="default" onClick={() => setCompanyList(isCompanyList + 1)} disabled={false} />
                        <ActiveBtn name="-" style="default" onClick={() => setCompanyList(isCompanyList - 1)} disabled={isCompanyList === 0} />
                    </div>
                    <Form123/>
                    <Form124/>
                    <Form125 is_position_list={isPositionList}/>
                    <div className="add_and_rm">
                        <ActiveBtn name="+" style="default" onClick={() => setPositionList(isPositionList + 1)} disabled={false} />
                        <ActiveBtn name="-" style="default" onClick={() => setPositionList(isPositionList - 1)} disabled={isPositionList === 3} />
                    </div>
                    <span className="sort_title" id="2_0">2. 인증 신청 정보</span>
                    <span className="sort_sub_title" id="2_1">2.1 신청 표준 및 활동범위</span>
                    <Form211/>
                    <Form212/>
                    <Form213/>
                    <Form214/>
                    <Form215/>
                    <Form216/>
                    <span className="sort_sub_title" id="2_2">2.2 통합심사 정보 (해당 시 작성)</span>
                    <Form221/>
                    <span className="sort_sub_title" id="2_3">2.3 기관전환 정보 (해당 시 작성)</span>
                    <Form231/>
                    <span className="sort_sub_title" id="2_4">2.4 공통 기재사항</span>
                    <button type="submit" className="active_button default">
                        <span className="button_text">발송</span>
                    </button>
                </form>
            </div>
        </>
    );
}

export default RequestForm