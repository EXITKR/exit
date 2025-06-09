const Form215 = () => {
    return (
        <div className="form_section input_section">
            <span className="input_name jc-ct w-10 br-on">기관전환 여부</span>
            <div className="input_div w-5">
                <input type="radio" id="change_org" name="form215_001" value="true" />
            </div>
            <span className="input_name jc-ct w-15 br-on">예&nbsp;<a href="#2_3">[2.3]</a>항 필수 작성</span>
            <div className="input_div w-5">
                <input type="radio" id="change_org" name="form215_001" value="false" />
            </div>
            <span className="input_name jc-ct w-15 br-on">아니오</span>
        </div>
    )
}

export default Form215;