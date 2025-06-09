import { sendContactEmail } from "@utils/mail/mail";

const InquiryForm = () => {
    const handleSubmit = async (formData: FormData) => {
        const result = await sendContactEmail(formData, '일반문의');
        if (result.success) {
            alert(result.message);
        } else {
            alert(result.message);
        }
    }
    return (
        <>
            <span className="title">문의하기</span>
            <span className="desc">다양한 문의를 기다리고 있습니다.</span>
            <div className="inquiry_form">
                <form action={handleSubmit}>
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