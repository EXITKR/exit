const Form231 = () => {
    return (
        <div className="form_section input_section">
            <div className="form_sub w-100">
                <div className="form_sub_sub w-100 bt-on">
                    <span className="input_name jc-ct w-20">전 인증기관명</span>
                    <div className="input_div w-30 br-on">
                        <input type="text" id="ci_01" name="form231_001" placeholder="입력해주세요." />
                    </div>
                    <span className="input_name jc-ct w-20">인증서 유효기간</span>
                    <div className="input_div w-30">
                        <input type="text" id="ci_02" name="form231_002" placeholder="입력해주세요." />
                    </div>
                </div>
                <div className="form_sub_sub w-100">
                    <span className="input_name jc-ct w-20">최근 심사일</span>
                    <div className="input_div w-30 br-on">
                        <input type="text" id="ci_03" name="form231_003" placeholder="입력해주세요." />
                    </div>
                    <span className="input_name jc-ct w-20 br-on">최근 심사유형</span>
                    <div className="input_div w-5">
                        <input type="radio" id="ci_04" name="form231_004" value="0" />
                    </div>
                    <span className="input_name jc-ct w-5 br-on">최초</span>
                    <div className="input_div w-5">
                        <input type="radio" id="ci_04" name="form231_004" value="1" />
                    </div>
                    <span className="input_name jc-ct w-5 br-on">갱신</span>
                    <div className="input_div w-5">
                        <input type="radio" id="ci_04" name="form231_004" value="2" />
                    </div>
                    <span className="input_name jc-ct w-5">사후</span>
                </div>
            </div>
        </div>
    )
}

export default Form231;