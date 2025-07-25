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
import Form217 from "@components/contact_us/request/Form217";
import Form221 from "@components/contact_us/request/Form221";
import Form231 from "@components/contact_us/request/Form231";
import Form232 from "@components/contact_us/request/Form232";
import Form241 from "@components/contact_us/request/Form241";
import Form251 from "@components/contact_us/request/Form251";
import Form252 from "@components/contact_us/request/Form252";
import Form261 from "@components/contact_us/request/Form261";
import Form262 from "@components/contact_us/request/Form262";
import Form263 from "@components/contact_us/request/Form263";
import Form311 from "@components/contact_us/request/Form311";
import Form312 from "@components/contact_us/request/Form312";
import Form313 from "@components/contact_us/request/Form313";
import Form314 from "@components/contact_us/request/Form314";
import Form315 from "@components/contact_us/request/Form315";
import Form316 from "@components/contact_us/request/Form316";
import Form321 from "@components/contact_us/request/Form321";
import Form322 from "@components/contact_us/request/Form322";
import Form400 from "@components/contact_us/request/Form400";
import { attachmentsPathInterface, OriginalInputState } from "@interfaces/pagesInterface";
import { sendContactEmail } from "@utils/mail/mail";
import { toPng } from "html-to-image";
import jsPDF from "jspdf";
import { useState } from "react";
import { getMetadata } from "@utils/Metadata";
import type { Metadata } from "next";
import Form218 from "@components/contact_us/request/Form218";

export const metadata: Metadata = getMetadata("인증 신청하기")

const RequestForm = (props: {
    setLoading: (status: boolean) => void
    setMessage: (message: string) => void
}) => {
    const [isCompanyList, setCompanyList] = useState<number>(3)
    const [isPositionList, setPositionList] = useState<number>(3)
    const [isSceneList, setSceneList] = useState<number>(5)

    const prepareInputsForCapture = (node: HTMLElement): OriginalInputState[] => {
        const inputs = node.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('input, textarea');
        const originalStates: OriginalInputState[] = [];

        inputs.forEach(input => {
            if (input.value === '' && input.placeholder) {
                originalStates.push({
                    element: input,
                    originalValue: input.value,
                    originalPlaceholder: input.placeholder,
                    originalColor: input.style.color,
                    originalWeight: input.style.fontWeight
                });
                input.value = input.placeholder;
                input.style.color = '#cccccc';
                input.placeholder = '';
                input.style.fontWeight = "500"
            }
        });

        return originalStates;
    };

    const restoreInputsAfterCapture = (originalStates: OriginalInputState[]) => {
        originalStates.forEach(state => {
            state.element.value = state.originalValue;
            state.element.placeholder = state.originalPlaceholder;
            state.element.style.color = state.originalColor;
            state.element.style.fontWeight = state.originalWeight;
        });
    };

    const handleChangeImage = async () => {
        const node = document.getElementById('request_form')
        if (node === null) {
            return false
        }

        props.setMessage("데이터를 PDF로 변환 중...")
        const originalInputStates = prepareInputsForCapture(node)

        const imgWidth = 210;
        const padding = 5;
        const doc = new jsPDF('p', 'mm', 'a4', true);
        let curHeight = padding;

        for (let i = 1; i <= 14; i++) {
            props.setMessage("데이터를 PDF로 변환 중...(" + i + "/14)")
            console.log("이미지 변환중 " + i)
            const subNode = document.getElementById('request_form_' + i.toString().padStart(2, '0'));
            if (subNode === null) {
                return false
            }

            const subNodeImg = await toPng(subNode)
            const imageHeight = (subNode.clientHeight * imgWidth) / subNode.clientWidth;

            console.log("이미지 변환 완료 " + i)

            if (curHeight + imageHeight > doc.internal.pageSize.height - padding) {
                doc.addPage();
                curHeight = padding;
            }

            console.log("PDF에 이미지 삽입중 " + i)
            doc.addImage(subNodeImg, 'PNG', padding, curHeight, 200, imageHeight);
            curHeight += imageHeight + padding;
        }

        props.setMessage("PDF로 최적화 중...")

        const pdf = new File([doc.output("blob")], "EXQM-IA01_인증신청서_및_설문서.pdf", {
            type: "application/pdf",
        })

        console.log("PDF 생성 완료")

        restoreInputsAfterCapture(originalInputStates)

        return pdf;
    }

    const convertFileToBase64 = async (file: File) => {
        let dataUrl;
        if (file instanceof File) {
            const buffer = Buffer.from(await file.arrayBuffer());
            const base64String = buffer.toString('base64');
            dataUrl = `data:${file.type};base64,${base64String}`;
        } else {
            dataUrl = ""
        }

        return dataUrl
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        props.setLoading(true)
        props.setMessage("시작하기 전 몸푸는 중...")
        const form = event.currentTarget;
        const formData = new FormData(form);

        const fileRes: attachmentsPathInterface[] = []

        const pdf = await handleChangeImage()
        const pdfDataUrl = await convertFileToBase64(pdf as File)
        fileRes.push({ filename: "EXQM-IA01_인증신청서_및_설문서.pdf", path: pdfDataUrl as string})

        for (let i = 1; i <= 8; i++) {
            const file = formData.get('file_' + i.toString().padStart(2, '0')) as File
            if (file.name !== "") {
                const fileDataUrl = await convertFileToBase64(file as File)
                fileRes.push({ filename: file.name, path: fileDataUrl as string})
            }
        }

        props.setMessage("메일을 발송하는 중...")
        const result = await sendContactEmail(formData, '인증신청', fileRes);
        if (result.success) {
            props.setLoading(false)
            alert(result.message);
        } else {
            props.setLoading(false)
            alert(result.message);
        }
    }

    return (
        <>
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
            <div className="request_forms" id="request_form">
                <form onSubmit={handleSubmit}>
                    <div id="request_form_01" className="request_form">
                        <span className="sort_title" id="1_0">1. 기본정보</span>
                        <span className="sort_sub_title" id="1_1">1.1 일반정보</span>
                        <Form111 />
                        <Form112 />
                    </div>
                    <div id="request_form_02" className="request_form">
                        <span className="sort_sub_title" id="1_2">1.2 본사 및 추가 사업장에 대한 인원 정보</span>
                        <Form121 />
                        <Form122 is_company_list={isCompanyList} />
                    </div>
                    <div className="add_and_rm">
                        <ActiveBtn name="+" style="default" onClick={() => setCompanyList(isCompanyList + 1)} disabled={false} />
                        <ActiveBtn name="-" style="default" onClick={() => setCompanyList(isCompanyList - 1)} disabled={isCompanyList === 0} />
                    </div>
                    <div id="request_form_03" className="request_form">
                        <Form123 />
                        <Form124 />
                        <Form125 is_position_list={isPositionList} />
                    </div>
                    <div className="add_and_rm">
                        <ActiveBtn name="+" style="default" onClick={() => setPositionList(isPositionList + 1)} disabled={false} />
                        <ActiveBtn name="-" style="default" onClick={() => setPositionList(isPositionList - 1)} disabled={isPositionList === 3} />
                    </div>
                    <div id="request_form_04" className="request_form">
                        <span className="sort_title" id="2_0">2. 인증 신청 정보</span>
                        <span className="sort_sub_title" id="2_1">2.1 신청 표준 및 활동범위</span>
                        <Form211 />
                        <Form218 />
                        <Form212 />
                        <Form213 />
                        <Form217 />
                        <Form214 />
                        <Form215 />
                    </div>
                    <div id="request_form_05" className="request_form">
                        <span className="sort_sub_title" id="2_2">2.2 시스템 인증 심사 정보 (해당 시 작성)</span>
                        <Form221 />
                    </div>
                    <div id="request_form_06" className="request_form">
                        <span className="sort_sub_title" id="2_3">2.3 기관전환 정보 (해당 시 작성)</span>
                        <Form231 />
                        <Form232 />
                    </div>
                    <div id="request_form_07" className="request_form">
                        <span className="sort_sub_title" id="2_4">2.4 공통 기재사항</span>
                        <Form241 />
                    </div>
                    <div id="request_form_08" className="request_form">
                        <span className="sort_sub_title" id="2_5">2.5 인증 관련 정보</span>
                        <Form251 />
                        <Form252 />
                    </div>
                    <div id="request_form_09" className="request_form">
                        <span className="sort_sub_title" id="2_6">2.6 첨부서류 체크리스트</span>
                        <Form261 />
                        <Form262 />
                        <Form263 />
                    </div>
                    <div id="request_form_10" className="request_form">
                        <span className="sort_title" id="3_0">3. 추가 기재사항</span>
                        <span className="sort_sub_title" id="3_1">3.1 환경/안전보건 경영시스템 추가 기재사항</span>
                        <Form311 />
                        <Form312 />
                        <Form313 />
                        <Form314 />
                        <Form315 />
                        <Form316 />
                    </div>
                    <div id="request_form_11" className="request_form">
                        <span className="sort_sub_title" id="3_2">3.2 건설업/감리업 관련 추가 정보</span>
                        <Form321 is_scene_list={isSceneList} />
                    </div>
                    <div className="add_and_rm">
                        <ActiveBtn name="+" style="default" onClick={() => setSceneList(isSceneList + 1)} disabled={false} />
                        <ActiveBtn name="-" style="default" onClick={() => setSceneList(isSceneList - 1)} disabled={isSceneList === 5} />
                    </div>
                    <div id="request_form_12" className="request_form">
                        <Form322 />
                    </div>
                    <div id="request_form_14" className="request_form">
                        <span className="sort_sub_title" id="0_0">0. 추가 문의</span>
                        <Form400 />
                    </div>
                    <button type="submit" className="submit_btn active_button default">
                        <span className="button_text">전송</span>
                    </button>
                </form>
            </div>
        </>
    );
}

export default RequestForm