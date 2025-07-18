import { sendContactEmail } from "@utils/mail/mail";
import { getMetadata } from "@utils/Metadata";
import type { Metadata } from "next";

export const metadata: Metadata = getMetadata("일반문의")

const InquiryForm = (props: {
    setLoading: (status: boolean) => void
    setMessage: (message: string) => void
}) => {
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        props.setLoading(true)
        props.setMessage("시작하기 전 몸푸는 중...")
        const form = event.currentTarget;
        const formData = new FormData(form);
        props.setMessage("메일을 발송하는 중...")
        const result = await sendContactEmail(formData, '일반문의', []);
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
            <div className="inquiry_form">
                <form onSubmit={handleSubmit}>
                    <div className="form_section input_section">
                        <span className="input_name">이름</span>
                        <div className="input_div">
                            <input type="text" id="name" name="to_name" placeholder="입력해주세요." required />
                        </div>
                    </div>
                    <div className="form_section input_section">
                        <span className="input_name">이메일</span>
                        <div className="input_div">
                            <input type="email" id="email" name="to_email" placeholder="입력해주세요." required />
                        </div>
                    </div>
                    <div className="form_section input_section">
                        <span className="input_name">제목</span>
                        <div className="input_div">
                            <input type="text" id="subject" name="to_subject" placeholder="입력해주세요." required />
                        </div>
                    </div>
                    <div className="form_section textarea_section">
                        <span className="input_name">메시지</span>
                        <div className="input_div">
                            <textarea id="message" name="to_message" placeholder="입력해주세요." required />
                        </div>
                    </div>
                    <button type="submit" className="submit_btn active_button default">
                        <span className="button_text">발송</span>
                    </button>
                </form>
            </div>
        </>
    );
}

export default InquiryForm