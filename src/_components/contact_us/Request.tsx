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
import Form331 from "@components/contact_us/request/Form331";
import Form332 from "@components/contact_us/request/Form332";
import Form400 from "@components/contact_us/request/Form400";
import { attachmentsPathInterface, OriginalInputState } from "@interfaces/pagesInterface";
import { sendContactEmail } from "@utils/mail/mail";
import { toPng } from "html-to-image";
import jsPDF from "jspdf";
import { useState } from "react";

const RequestForm = () => {
    const [isCompanyList, setCompanyList] = useState<number>(3)
    const [isPositionList, setPositionList] = useState<number>(3)
    const [isSceneList, setSceneList] = useState<number>(5)
    const [isProcessList, setProcessList] = useState<number>(3)

    const [submitBtnStatus, setSubmitBtnStatus] = useState<boolean>(false)
    const [submitBtnName, setSubmitBtnName] = useState<string>("발송")
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

        const originalInputStates = prepareInputsForCapture(node)

        const imgWidth = 210;
        const padding = 5;
        const doc = new jsPDF('p', 'mm', 'a4', true);
        let curHeight = padding;

        for (let i = 1; i <= 14; i++) {
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

    const handleSubmit = async (formData: FormData) => {
        setSubmitBtnStatus(true)
        const fileRes: attachmentsPathInterface[] = []

        const pdf = await handleChangeImage()
        setSubmitBtnName("PDF 생성중...")
        const pdfDataUrl = await convertFileToBase64(pdf as File)
        fileRes.push({ filename: "EXQM-IA01_인증신청서_및_설문서.pdf", path: pdfDataUrl as string})
        setSubmitBtnName("PDF 생성완료...")

        setSubmitBtnName("첨부파일 확인중...")
        for (let i = 1; i <= 8; i++) {
            const file = formData.get('file_' + i.toString().padStart(2, '0')) as File
            if (file.name !== "") {
                const fileDataUrl = await convertFileToBase64(file as File)
                fileRes.push({ filename: file.name, path: fileDataUrl as string})
            }
        }

        setSubmitBtnName("파일 변환완료...")

        setSubmitBtnName("메일 발송중...")
        const result = await sendContactEmail(formData, '인증신청', fileRes);
        if (result.success) {
            setSubmitBtnStatus(false)
            setSubmitBtnName("발송")
            alert(result.message);
        } else {
            setSubmitBtnStatus(false)
            setSubmitBtnName("발송")
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
            <div className="request_forms" id="request_form">
                <form action={handleSubmit}>
                    <input type="hidden" id="company_list" name="company_list" value={isCompanyList.toString()} />
                    <input type="hidden" id="position_list" name="position_list" value={isPositionList.toString()} />
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
                        <Form212 />
                        <Form213 />
                        <Form217 />
                        <Form214 />
                        <Form215 />
                        <Form216 />
                    </div>
                    <div id="request_form_05" className="request_form">
                        <span className="sort_sub_title" id="2_2">2.2 통합심사 정보 (해당 시 작성)</span>
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
                    <div id="request_form_13" className="request_form">
                        <span className="sort_sub_title" id="3_3">3.3 TL 9000 관련 추가정보</span>
                        <Form331 />
                        <Form332 is_process_list={isProcessList} />
                    </div>
                    <div className="add_and_rm">
                        <ActiveBtn name="+" style="default" onClick={() => setProcessList(isProcessList + 1)} disabled={false} />
                        <ActiveBtn name="-" style="default" onClick={() => setProcessList(isProcessList - 1)} disabled={isProcessList === 3} />
                    </div>
                    <div id="request_form_14" className="request_form">
                        <Form400 />
                    </div>
                    <button type="submit" className="submit_btn active_button default" disabled={submitBtnStatus}>
                        <span className="button_text">{submitBtnName}</span>
                    </button>
                </form>
            </div>
        </>
    );
}

export default RequestForm