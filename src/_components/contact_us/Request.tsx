import ActiveBtn from "@components/buttons/ActiveBtn";
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
                    <input type="hidden" id="company_list" name="company_list" value={isCompanyList.toString()}/>
                    <input type="hidden" id="position_list" name="position_list" value={isPositionList.toString()}/>
                    <span className="sort_title" id="1_0">1. 기본정보</span>
                    <span className="sort_sub_title" id="1_1">1.1 일반정보</span>

                    <div className="form_section input_section form_1_1_1">
                        <span className="input_name">조직명</span>
                        <span className="input_name">(국문)</span>
                        <div className="input_div">
                            <input type="name" id="name" name="name_kr" placeholder="입력해주세요." required />
                        </div>
                        <span className="input_name">(영문)</span>
                        <div className="input_div">
                            <input type="name" id="name" name="name_en" placeholder="입력해주세요." required />
                        </div>
                    </div>

                    <div className="form_section input_section form_1_1_2">
                        <span className="input_name con">담당자 정보</span>
                        <div className="form_sub">
                            <div className="form_sub_sub">
                                <span className="input_name">성명/직책</span>
                                <div className="input_div">
                                    <input type="text" id="role" name="name_role" placeholder="입력해주세요." required />
                                </div>
                            </div>
                            <div className="form_sub_sub">
                                <span className="input_name">부서</span>
                                <div className="input_div">
                                    <input type="text" id="team" name="team" placeholder="입력해주세요." required />
                                </div>
                            </div>
                            <div className="form_sub_sub">
                                <span className="input_name">전화번호</span>
                                <div className="input_div">
                                    <input type="tel" id="tel" name="tel" placeholder="입력해주세요." required />
                                </div>
                            </div>
                            <div className="form_sub_sub">
                                <span className="input_name">이메일</span>
                                <div className="input_div">
                                    <input type="email" id="email" name="email" placeholder="입력해주세요." required />
                                </div>
                            </div>
                        </div>

                        <div className="form_sub">
                            <div className="form_sub_sub">
                                <span className="input_name">대표자</span>
                                <div className="input_div">
                                    <input type="text" id="ceo" name="ceo" placeholder="입력해주세요." required />
                                </div>
                            </div>
                            <div className="form_sub_sub">
                                <span className="input_name">휴대폰</span>
                                <div className="input_div">
                                    <input type="tel" id="mobile" name="mobile" placeholder="입력해주세요." required />
                                </div>
                            </div>
                            <div className="form_sub_sub">
                                <span className="input_name">팩스</span>
                                <div className="input_div">
                                    <input type="text" id="fax" name="fax" placeholder="입력해주세요." required />
                                </div>
                            </div>
                            <div className="form_sub_sub">
                                <span className="input_name">계산서메일</span>
                                <div className="input_div">
                                    <input type="email" id="bill" name="bill" placeholder="입력해주세요." required />
                                </div>
                            </div>
                        </div>
                    </div>

                    <span className="sort_sub_title" id="1_2">1.2 본사 및 추가 사업장에 대한 인원 정보</span>

                    <div className="form_section input_section form_1_2_1">
                        <span className="input_name add">사업장 주소<br />(인증 범위에 해당되는 사업장만 기재)</span>
                        <span className="input_name num">정규직<br />인원</span>
                        <span className="input_name num_b">교대근무인원<br />2교대/3교대</span>
                        <span className="input_name num">일용직/<br />협력사인원</span>
                        <span className="input_name num">전체<br />종업원수</span>
                    </div>

                    <div className="form_section input_section form_1_2_2">
                        <span className="input_name">본사</span>
                        <div className="form_sub">
                            <div className="form_sub_sub">
                                <span className="input_name">국문)</span>
                                <div className="input_div">
                                    <input type="text" id="address" name="address_kr_01" placeholder="입력해주세요." />
                                </div>
                            </div>
                            <div className="form_sub_sub">
                                <span className="input_name">영문)</span>
                                <div className="input_div">
                                    <input type="text" id="address" name="address_kr_01" placeholder="입력해주세요." />
                                </div>
                            </div>
                        </div>

                        <div className="input_div">
                            <input type="text" id="number" name="permanent_num_01" placeholder="0" />
                        </div>

                        <div className="input_div">
                            <input type="text" id="number" name="shift2_num_01" placeholder="0" />
                        </div>

                        <div className="input_div">
                            <input type="text" id="number" name="shift3_num_01" placeholder="0" />
                        </div>

                        <div className="input_div">
                            <input type="text" id="number" name="daily_num_01" placeholder="0" />
                        </div>

                        <div className="input_div">
                            <input type="text" id="number" name="total_num_01" placeholder="0" />
                        </div>
                    </div>

                    {[...Array(parseInt(isCompanyList.toString()))].map((item, index) => (
                        <div className="form_section input_section form_1_2_2" key={index}>
                            <span className="input_name">{"사업장 " + (index + 1)}</span>
                            <div className="form_sub">
                                <div className="form_sub_sub">
                                    <span className="input_name">국문)</span>
                                    <div className="input_div">
                                        <input type="text" id="address" name={"address_kr_0" + (index + 1)} placeholder="입력해주세요." />
                                    </div>
                                </div>
                                <div className="form_sub_sub">
                                    <span className="input_name">영문)</span>
                                    <div className="input_div">
                                        <input type="text" id="address" name={"address_en_0" + (index + 1)} placeholder="입력해주세요." />
                                    </div>
                                </div>
                            </div>

                            <div className="input_div">
                                <input type="text" id="number" name={"permanent_num_0" + (index + 1)} placeholder="0" />
                            </div>

                            <div className="input_div">
                                <input type="text" id="number" name={"shift2_num_0" + (index + 1)} placeholder="0" />
                            </div>

                            <div className="input_div">
                                <input type="text" id="number" name={"shift3_num_0" + (index + 1)} placeholder="0" />
                            </div>

                            <div className="input_div">
                                <input type="text" id="number" name={"daily_num_0" + (index + 1)} placeholder="0" />
                            </div>

                            <div className="input_div">
                                <input type="text" id="number" name={"total_num_0" + (index + 1)} placeholder="0" />
                            </div>
                        </div>
                    ))}

                    <div className="add_and_rm">
                        <ActiveBtn name="+" style="default" onClick={() => setCompanyList(isCompanyList + 1)} disabled={false} />
                        <ActiveBtn name="-" style="default" onClick={() => setCompanyList(isCompanyList - 1)} disabled={isCompanyList === 0} />
                    </div>

                    <div className="form_section input_section form_1_2_3">
                        <span className="input_name add">
                            * 종업원 수는 인증범위에 포함된 경우에는 비정규직(예: 계약직 협력업체 인원) 및 시간제 근로자도 포함<br />
                            * 안전보건의 경우 조직의 관리하에 있는 사업장에 근무하는 협력업체 인원이나 협력업체의 하청 인원들도 포함
                        </span>
                        <span className="input_name num">전체 사업장 총 종업원수</span>
                        <div className="input_div">
                            <input type="text" id="number" name="total_num" placeholder="0" />
                        </div>
                    </div>

                    <div className="form_section input_section form_1_2_4">
                        <span className="input_name add">
                            귀사의 사업장과 떨어진 곳에서 근무하는 인원이 있습니까? (파견직 등)
                        </span>
                        <div className="input_div">
                            <input type="radio" id="far_people" name="far_people_bool" value="true" required/>
                        </div>
                        <span className="input_name far">예 (세부내역 기재)</span>
                        <div className="input_div">
                            <input type="radio" id="far_people" name="far_people_bool" value="false" required/>
                        </div>
                        <span className="input_name far">아니오</span>
                    </div>

                    <div className="form_section input_section form_1_2_5">
                        <span className="input_name con">
                            해당인원, 사업장 위치
                            및 업무 등을
                            기술하여 주십시오
                        </span>
                        <div className="form_sub">
                            <div className="form_sub_sub">
                                <span className="input_name num">해당인원 수</span>
                                <span className="input_name tas">주요 업무</span>
                                <span className="input_name pos">사업장 위치</span>
                            </div>
                            {[...Array(parseInt(isPositionList.toString()))].map((item, index) => (
                                <div className="form_sub_sub" key={index}>
                                    <div className="input_div">
                                        <input type="text" id="1_people_num" name={"1_people_num" + (index + 1)} placeholder="0" />
                                    </div>
                                    <div className="input_div">
                                        <input type="text" id="1_major_task" name={"1_major_task" + (index + 1)} placeholder="입력해주세요." />
                                    </div>
                                    <div className="input_div">
                                        <input type="text" id="1_company_position" name={"1_company_position" + (index + 1)} placeholder="입력해주세요." />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="add_and_rm">
                        <ActiveBtn name="+" style="default" onClick={() => setPositionList(isPositionList + 1)} disabled={false} />
                        <ActiveBtn name="-" style="default" onClick={() => setPositionList(isPositionList - 1)} disabled={isPositionList === 3} />
                    </div>

                    <span className="sort_title" id="2_0">2. 인증 신청 정보</span>
                    <span className="sort_sub_title" id="2_1">2.1 신청 표준 및 활동범위</span>

                    <div className="form_section input_section form_2_1_1">
                        <span className="input_name con">신청 표준</span>
                        <div className="form_sub">
                            <div className="form_sub_sub">
                                <div className="input_div">
                                    <input type="checkbox" id="iso_01" name="iso_01" />
                                </div>
                                <span className="input_name">ISO 9001:2015</span>
                            </div>
                            <div className="form_sub_sub">
                                <div className="input_div">
                                    <input type="checkbox" id="iso_02" name="iso_02" />
                                </div>
                                <span className="input_name">ISO 45001:2018</span>
                            </div>
                        </div>
                        <div className="form_sub">
                            <div className="form_sub_sub">
                                <div className="input_div">
                                    <input type="checkbox" id="iso_03" name="iso_03" />
                                </div>
                                <span className="input_name">ISO 14001:2015</span>
                            </div>
                            <div className="form_sub_sub">
                                <div className="input_div">
                                    <input type="checkbox" id="iso_04" name="iso_04" />
                                </div>
                                <span className="input_name">기타</span>
                            </div>
                        </div>
                        <div className="form_sub">
                            <div className="form_sub_sub">
                                <div className="input_div">
                                    <input type="checkbox" id="iso_05" name="iso_05" />
                                </div>
                                <span className="input_name">TL 9000</span>
                            </div>
                            <div className="form_sub_sub">
                                <div className="input_div etc_in">
                                    <input type="text" id="iso_04_text" name="iso_04_text" placeholder="입력해주세요." />
                                </div>
                            </div>
                        </div>
                        <div className="form_sub">
                            <div className="form_sub_sub">
                                <span className="input_name rr_ti">요구사항 R</span>
                                <div className="input_div rr_id">
                                    <input className="rr_in" type="text" id="iso_06" name="iso_06" placeholder="0" />
                                </div>
                            </div>
                            <div className="form_sub_sub"></div>
                        </div>
                        <div className="form_sub">
                            <div className="form_sub_sub">
                                <span className="input_name rr_ti">성과지표 R</span>
                                <div className="input_div rr_id_no">
                                    <input className="rr_in" type="text" id="iso_06" name="iso_06" placeholder="0" />
                                </div>
                            </div>
                            <div className="form_sub_sub"></div>
                        </div>
                    </div>

                    <div className="form_section input_section form_2_1_2">
                        <span className="input_name con">통합 심사 여부</span>
                        <div className="input_div">
                            <input type="radio" id="total_audit" name="total_audit_bool" value="true"/>
                        </div>
                        <span className="input_name audit">예&nbsp;<a href="#2_2">[2.2]</a>항 필수 작성</span>
                        <div className="input_div">
                            <input type="radio" id="total_audit" name="total_audit_bool" value="false"/>
                        </div>
                        <span className="input_name audit">아니오</span>
                    </div>

                    <div className="form_section textarea_section form_2_1_3">
                        <span className="input_name">신청 인증 범위</span>
                        <div className="input_div">
                            <textarea id="audit_range" name="audit_range" placeholder="입력해주세요." />
                        </div>
                    </div>

                    <div className="form_section input_section form_2_1_4">
                        <span className="input_name con">유형<br/>(해당사항 모두 체크)</span>
                        <div className="form_sub">
                            <div className="form_sub_sub">
                                <div className="input_div">
                                    <input type="checkbox" id="type_01" name="type_01" />
                                </div>
                                <span className="input_name">설계 / 개발(연구)</span>
                            </div>
                            <div className="form_sub_sub">
                                <div className="input_div">
                                    <input type="checkbox" id="type_02" name="type_02" />
                                </div>
                                <span className="input_name">도소매</span>
                            </div>
                        </div>
                        <div className="form_sub">
                            <div className="form_sub_sub">
                                <div className="input_div">
                                    <input type="checkbox" id="type_03" name="type_03" />
                                </div>
                                <span className="input_name">제조</span>
                            </div>
                            <div className="form_sub_sub">
                                <div className="input_div">
                                    <input type="checkbox" id="type_04" name="type_04" />
                                </div>
                                <span className="input_name">서비스</span>
                            </div>
                        </div>
                        <div className="form_sub">
                            <div className="form_sub_sub">
                                <div className="input_div">
                                    <input type="checkbox" id="type_05" name="type_05" />
                                </div>
                                <span className="input_name">건설</span>
                            </div>
                            <div className="form_sub_sub">
                                <div className="input_div">
                                    <input type="checkbox" id="type_06" name="type_06" />
                                </div>
                                <span className="input_name">기타</span>
                            </div>
                        </div>
                        <div className="form_sub">
                            <div className="form_sub_sub">
                                <div className="input_div">
                                    <input type="checkbox" id="type_07" name="type_07" />
                                </div>
                                <span className="input_name">엔지니어링/감리</span>
                            </div>
                            <div className="form_sub_sub">
                                <div className="input_div etc_in">
                                    <input type="text" id="type_06_text" name="type_06_text" placeholder="입력해주세요." />
                                </div>
                            </div>
                        </div>
                        <div className="form_sub">
                            <div className="form_sub_sub">
                                <div className="input_div">
                                    <input type="checkbox" id="type_07" name="type_07" />
                                </div>
                                <span className="input_name ty_id_no">전문공사</span>
                            </div>
                            <div className="form_sub_sub">
                            </div>
                        </div>
                    </div>

                    <div className="form_section input_section form_2_1_5">
                        <span className="input_name con">기관전환 여부</span>
                        <div className="input_div">
                            <input type="radio" id="change_org" name="change_org_bool" value="true"/>
                        </div>
                        <span className="input_name org">예&nbsp;<a href="#2_3">[2.3]</a>항 필수 작성</span>
                        <div className="input_div">
                            <input type="radio" id="change_org" name="change_org_bool" value="false"/>
                        </div>
                        <span className="input_name org">아니오</span>
                    </div>

                    <div className="form_section input_section form_2_1_6">
                        <span className="input_name con">TL9000<br/>해당사항</span>
                        <div className="form_sub">
                            <div className="form_sub_sub">
                                <span className="input_name tl_id_no">제품 범주명</span>
                                <div className="input_div etc_in">
                                    <input type="text" id="tl_01" name="tl_01" placeholder="입력해주세요." />
                                </div>
                            </div>
                            <div className="form_sub_sub">
                                <div className="input_div">
                                    <input type="checkbox" id="tl_02" name="tl_02" />
                                </div>
                                <span className="input_name pdc">하드웨어(H)</span>
                                <div className="input_div">
                                    <input type="checkbox" id="tl_03" name="tl_03" />
                                </div>
                                <span className="input_name pdc">소프트웨어(S)</span>
                            </div>
                        </div>
                        <div className="form_sub">
                            <div className="form_sub_sub">
                                <span className="input_name tl_id_no">제품 범주 번호</span>
                                <div className="input_div etc_in tl_id_no">
                                    <input type="text" id="tl_04" name="tl_04" placeholder="입력해주세요." />
                                </div>
                            </div>
                            <div className="form_sub_sub">
                                <div className="input_div">
                                    <input type="checkbox" id="tl_05" name="tl_05" />
                                </div>
                                <span className="input_name pdc">서비스(V)</span>
                            </div>
                        </div>
                    </div>

                    <span className="sort_sub_title" id="2_2">2.2 통합심사 정보 (해당 시 작성)</span>

                    <button type="submit" className="active_button default">
                        <span className="button_text">발송</span>
                    </button>
                </form>
            </div>
        </>
    );
}

export default RequestForm