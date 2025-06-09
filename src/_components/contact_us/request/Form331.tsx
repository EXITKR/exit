const Form331 = () => {
    return (
        <div className="form_section input_section">
            <div className="form_sub w-100">
                <div className="form_sub_sub w-100 bt-on">
                    <span className="input_name jc-st w-40 br-on">1) 최근 3개월간의 DSR(성과지표) 제출 유무</span>
                    <div className="input_div w-5">
                        <input type="radio" id="tlp_01" name="form331_001" value="true" />
                    </div>
                    <span className="input_name jc-ct w-15 br-on">예</span>
                    <div className="input_div w-5">
                        <input type="radio" id="tlp_01" name="form331_001" value="false" />
                    </div>
                    <span className="input_name jc-ct w-15 br-on">아니오</span>
                </div>
                <div className="form_sub_sub w-100">
                    <span className="input_name jc-st w-100">
                        2) 심사 대상 사업장에 대한 인증범위 내에서 실행되는 프로세스
                        (예: 개발, 기술지원 센터, 제조, 교육훈련, 수리 등)와
                        해당되는 요구사항 및 성과지표 핸드북의 요구사항
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Form331;