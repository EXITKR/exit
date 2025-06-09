const Form252 = () => {
    return (
        <div className="form_section input_section">
            <div className="form_sub w-100">
                <div className="form_sub_sub w-100 bt-on">
                    <span className="input_name jc-st w-100">[추가설문] 자문 정보 기재</span>
                </div>
                <div className="form_sub_sub w-100 bt-on">
                    <span className="input_name jc-ct w-20">자문 받은 기간</span>
                    <div className="input_div w-20">
                        <input type="text" id="cs_02" name="form252_001" placeholder="연도" />
                    </div>
                    <span className="input_name jc-ct w-5">년</span>
                    <div className="input_div w-10">
                        <input type="text" id="cs_03" name="form252_002" placeholder="월" />
                    </div>
                    <span className="input_name jc-ct w-5 br-on">월</span>
                    <div className="input_div w-20">
                        <input type="text" id="cs_04" name="form252_003" placeholder="연도" />
                    </div>
                    <span className="input_name jc-ct w-5">년</span>
                    <div className="input_div w-10">
                        <input type="text" id="cs_05" name="form252_004" placeholder="월" />
                    </div>
                    <span className="input_name jc-ct w-5">월</span>
                </div>
                <div className="form_sub_sub w-100">
                    <span className="input_name jc-ct w-20">출입절차 및 규정</span>
                    <div className="input_div w-80">
                        <input type="text" id="cs_06" name="form252_005" placeholder="입력해주세요." />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form252;