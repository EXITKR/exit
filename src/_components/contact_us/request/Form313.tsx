const Form313 = () => {
    return (
        <div className="form_section input_section">
            <div className="form_sub w-100">
                <div className="form_sub_sub w-100 bt-on">
                    <span className="input_name jc-st w-100">2) 환경경영시스템</span>
                </div>
                <div className="form_sub_sub w-100 bt-on">
                    <span className="input_name jc-st w-100">귀사의 환경 부하는 어디에 해당합니까?</span>
                </div>
                <div className="form_sub_sub w-100 bt-on">
                    <span className="input_name jc-st w-40 br-on">1) 대기배출시설 허가</span>
                    <div className="input_div w-5">
                        <input type="radio" id="wn_03" name="form313_001" value="1종" />
                    </div>
                    <span className="input_name jc-ct w-5 br-on">1종</span>
                    <div className="input_div w-5">
                        <input type="radio" id="wn_03" name="form313_001" value="2종" />
                    </div>
                    <span className="input_name jc-ct w-5 br-on">2종</span>
                    <div className="input_div w-5">
                        <input type="radio" id="wn_03" name="form313_001" value="3종" />
                    </div>
                    <span className="input_name jc-ct w-5 br-on">3종</span>
                    <div className="input_div w-5">
                        <input type="radio" id="wn_03" name="form313_001" value="4종" />
                    </div>
                    <span className="input_name jc-ct w-5 br-on">4종</span>
                    <div className="input_div w-5">
                        <input type="radio" id="wn_03" name="form313_001" value="5종" />
                    </div>
                    <span className="input_name jc-ct w-5 br-on">5종</span>
                    <div className="input_div w-5">
                        <input type="radio" id="wn_03" name="form313_001" value="무관" />
                    </div>
                    <span className="input_name jc-ct w-5">무관</span>
                </div>
                <div className="form_sub_sub w-100 bt-on">
                    <span className="input_name jc-st w-40 br-on">2) 폐수배출시설 허가</span>
                    <div className="input_div w-5">
                        <input type="radio" id="wn_04" name="form313_002" value="1종" />
                    </div>
                    <span className="input_name jc-ct w-5 br-on">1종</span>
                    <div className="input_div w-5">
                        <input type="radio" id="wn_04" name="form313_002" value="2종" />
                    </div>
                    <span className="input_name jc-ct w-5 br-on">2종</span>
                    <div className="input_div w-5">
                        <input type="radio" id="wn_04" name="form313_002" value="3종" />
                    </div>
                    <span className="input_name jc-ct w-5 br-on">3종</span>
                    <div className="input_div w-5">
                        <input type="radio" id="wn_04" name="form313_002" value="4종" />
                    </div>
                    <span className="input_name jc-ct w-5 br-on">4종</span>
                    <div className="input_div w-5">
                        <input type="radio" id="wn_04" name="form313_002" value="5종" />
                    </div>
                    <span className="input_name jc-ct w-5 br-on">5종</span>
                    <div className="input_div w-5">
                        <input type="radio" id="wn_04" name="form313_002" value="무관" />
                    </div>
                    <span className="input_name jc-ct w-5">무관</span>
                </div>
                <div className="form_sub_sub w-100 bt-on">
                    <span className="input_name jc-st w-40 br-on">3) 폐기물 발생량</span>
                    <span className="input_name jc-ct w-10">지정</span>
                    <div className="input_div w-20 br-on">
                        <input type="text" id="wn_05" name="form313_003" placeholder="입력해주세요." />
                    </div>
                    <span className="input_name jc-ct w-10">일반</span>
                    <div className="input_div w-20">
                        <input type="text" id="wn_06" name="form313_004" placeholder="입력해주세요." />
                    </div>
                </div>
                <div className="form_sub_sub w-100 bt-on">
                    <span className="input_name jc-st w-40 br-on">
                        * 위탁 처리시 위탁 계약서 사본 첨부
                    </span>
                    <div className="input_div w-60">
                        <input type="file" id="wn_07" name="file_06" />
                    </div>
                </div>
                <div className="form_sub_sub w-100">
                    <span className="input_name jc-st w-40 br-on">4) 유해물질 사용허가</span>
                    <div className="input_div w-5">
                        <input type="radio" id="wn_08" name="form313_005" value="true" />
                    </div>
                    <span className="input_name jc-ct w-15 br-on">허가 대상</span>
                    <div className="input_div w-5">
                        <input type="radio" id="wn_08" name="form313_005" value="false" />
                    </div>
                    <span className="input_name jc-ct w-15 br-on">무관</span>
                </div>
            </div>
        </div>
    )
}

export default Form313;