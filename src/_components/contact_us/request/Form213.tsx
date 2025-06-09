const Form213 = () => {
    return (
        <div className="form_section textarea_section">
            <span className="input_name jc-ct w-10 br-on">신청 인증 범위<br/>별지 이용 가능</span>
            <div className="input_div w-90">
                <textarea id="audit_range" name="form213_001" placeholder="입력해주세요." />
            </div>
        </div>
    )
}

export default Form213;