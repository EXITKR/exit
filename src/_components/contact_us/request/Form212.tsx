const Form212 = () => {
    return (
        <div className="form_section input_section form_2_1_2">
            <span className="input_name con">통합 심사 여부</span>
            <div className="input_div">
                <input type="radio" id="total_audit" name="total_audit_bool" value="true" />
            </div>
            <span className="input_name audit">예&nbsp;<a href="#2_2">[2.2]</a>항 필수 작성</span>
            <div className="input_div">
                <input type="radio" id="total_audit" name="total_audit_bool" value="false" />
            </div>
            <span className="input_name audit">아니오</span>
        </div>
    )
}

export default Form212;