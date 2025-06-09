const Form311 = () => {
    return (
        <div className="form_section input_section">
            <div className="form_sub w-100">
                <div className="form_sub_sub w-100 bt-on">
                    <span className="input_name jc-st w-100">1) 공통사항</span>
                </div>
                <div className="form_sub_sub w-100">
                    <span className="input_name jc-st w-60 br-on">귀사는 최근 3년 이내에 환경/안전 사고를 발생시키거나. 관련법규를 위반한 적이 있습니까? (해당 시 내용을 자세히 기술 바랍니다.)</span>
                    <div className="input_div w-5">
                        <input type="radio" id="wn_01" name="form311_001" value="true" />
                    </div>
                    <span className="input_name jc-ct w-15 br-on">예 (추가설문 기재)</span>
                    <div className="input_div w-5">
                        <input type="radio" id="wn_01" name="form311_001" value="false" />
                    </div>
                    <span className="input_name jc-ct w-15">아니오</span>
                </div>
            </div>
        </div>
    )
}

export default Form311;