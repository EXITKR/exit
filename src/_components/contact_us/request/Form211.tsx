const Form211 = () => {
    return (
        <div className="form_section input_section">
            <span className="input_name jc-ct w-10 br-on">신청 표준</span>
            <div className="form_sub w-25 br-on">
                <div className="form_sub_sub w-100 bt-on">
                    <div className="input_div w-30">
                        <input type="checkbox" id="iso_01" name="form211_001" />
                    </div>
                    <span className="input_name jc-ct w-70">공급망 ESG 심사</span>
                </div>
                <div className="form_sub_sub w-100">
                    <div className="input_div w-30">
                        <input type="checkbox" id="iso_02" name="form211_002" />
                    </div>
                    <span className="input_name jc-ct w-70">ISO 45001:2018</span>
                </div>
            </div>
            <div className="form_sub w-25">
                <div className="form_sub_sub w-100 br-on bt-on">
                    <div className="input_div w-30">
                        <input type="checkbox" id="iso_03" name="form211_003" />
                    </div>
                    <span className="input_name jc-ct w-70">맞춤형 공급망 보안</span>
                </div>
                <div className="form_sub_sub w-100 br-on">
                    <div className="input_div w-30">
                        <input type="checkbox" id="iso_04" name="form211_004" />
                    </div>
                    <span className="input_name jc-ct w-70">ISO 기타 (CE / UL)</span>
                </div>
            </div>
            <div className="form_sub w-20">
                <div className="form_sub_sub w-100 br-on bt-on">
                    <div className="input_div w-30">
                        <input type="checkbox" id="iso_05" name="form211_005" />
                    </div>
                    <span className="input_name jc-ct w-70">ISO 9001:2015</span>
                </div>
                <div className="form_sub_sub w-100"></div>
            </div>
            <div className="form_sub w-20">
                <div className="form_sub_sub w-100 br-no bt-on">
                    <div className="input_div w-30">
                        <input type="checkbox" id="iso_05" name="form211_006" />
                    </div>
                    <span className="input_name jc-ct w-70">ISO 14001:2015</span>
                </div>
                <div className="form_sub_sub w-100"></div>
            </div>
        </div>
    )
}

export default Form211;