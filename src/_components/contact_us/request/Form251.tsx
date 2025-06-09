const Form251 = () => {
    return (
        <div className="form_section input_section">
            <span className="input_name jc-st w-60 br-on">최근 2년 이내 경영시스템 유지를 위한 자문을 받았습니까?</span>
            <div className="input_div w-5">
                <input type="radio" id="cs_01" name="form251_001" value="true" />
            </div>
            <span className="input_name jc-ct w-15 br-on">예 (추가설문 기재)</span>
            <div className="input_div w-5">
                <input type="radio" id="cs_01" name="form251_001" value="false" />
            </div>
            <span className="input_name jc-ct w-15">아니오</span>
        </div>
    )
}

export default Form251;