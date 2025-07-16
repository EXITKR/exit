const Form218 = () => {
    return (
        <div className="form_section input_section">
            <span className="input_name jc-ct w-10 br-on">맞춤형 공급망<br/>보안 (SCS)<br/>세부사항</span>
            <div className="form_sub w-50 br-on">
                <div className="form_sub_sub w-100 bt-on">
                    <div className="input_div w-15">
                        <input type="checkbox" id="iso_01" name="form218_001" />
                    </div>
                    <span className="input_name jc-ct w-85">개인정보보호 시스템 및 프로세스</span>
                </div>
                <div className="form_sub_sub w-100">
                    <div className="input_div w-15">
                        <input type="checkbox" id="iso_02" name="form218_002" />
                    </div>
                    <span className="input_name jc-ct w-85">COC (Code Of Conduct)</span>
                </div>
            </div>
            <div className="form_sub w-20">
                <div className="form_sub_sub w-100 br-on bt-on">
                    <div className="input_div w-30">
                        <input type="checkbox" id="iso_03" name="form218_003" />
                    </div>
                    <span className="input_name jc-ct w-70">DLP 시스템</span>
                </div>
                <div className="form_sub_sub w-100 br-on">
                    <div className="input_div w-30">
                        <input type="checkbox" id="iso_04" name="form218_004" />
                    </div>
                    <span className="input_name jc-ct w-70">ISO 27001:2022</span>
                </div>
            </div>
            <div className="form_sub w-20">
                <div className="form_sub_sub w-100 br-no bt-on">
                    <div className="input_div w-30">
                        <input type="checkbox" id="iso_05" name="form218_005" />
                    </div>
                    <span className="input_name jc-ct w-70">ISO 9001:2015</span>
                </div>
                <div className="form_sub_sub w-100 br-no">
                    <div className="input_div w-30">
                        <input type="checkbox" id="iso_04" name="form218_006" />
                    </div>
                    <span className="input_name jc-ct w-70">C-TPAT / AEO</span>
                </div>
            </div>
        </div>
    )
}

export default Form218;