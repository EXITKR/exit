const Form214 = () => {
    return (
        <div className="form_section input_section">
            <span className="input_name jc-ct w-10 br-on">유형<br />(해당사항<br />모두 체크)</span>
            <div className="form_sub w-20 br-on">
                <div className="form_sub_sub w-100 bt-on">
                    <div className="input_div w-30">
                        <input type="checkbox" id="type_01" name="form214_001" />
                    </div>
                    <span className="input_name jc-ct w-70">설계 / 개발(연구)</span>
                </div>
                <div className="form_sub_sub w-100">
                    <div className="input_div w-30">
                        <input type="checkbox" id="type_02" name="form214_002" />
                    </div>
                    <span className="input_name jc-ct w-70">도소매</span>
                </div>
            </div>
            <div className="form_sub w-15 br-on">
                <div className="form_sub_sub w-100 bt-on">
                    <div className="input_div w-30">
                        <input type="checkbox" id="type_03" name="form214_003" />
                    </div>
                    <span className="input_name jc-ct w-70">제조</span>
                </div>
                <div className="form_sub_sub w-100">
                    <div className="input_div w-30">
                        <input type="checkbox" id="type_04" name="form214_004" />
                    </div>
                    <span className="input_name jc-ct w-70">서비스</span>
                </div>
            </div>
            <div className="form_sub w-15">
                <div className="form_sub_sub w-100 br-on bt-on">
                    <div className="input_div w-30">
                        <input type="checkbox" id="type_05" name="form214_005" />
                    </div>
                    <span className="input_name jc-ct w-70">건설</span>
                </div>
                <div className="form_sub_sub w-100">
                    <div className="input_div w-30">
                        <input type="checkbox" id="type_06" name="form214_006" />
                    </div>
                    <span className="input_name jc-ct w-70">기타</span>
                </div>
            </div>
            <div className="form_sub w-20 br-on">
                <div className="form_sub_sub w-100 bt-on">
                    <div className="input_div w-30">
                        <input type="checkbox" id="type_07" name="form214_007" />
                    </div>
                    <span className="input_name jc-ct w-70">엔지니어링/감리</span>
                </div>
                <div className="form_sub_sub w-100">
                    <div className="input_div w-100">
                        <input type="text" id="type_06_text" name="form214_008" placeholder="입력해주세요." />
                    </div>
                </div>
            </div>
            <div className="form_sub w-20">
                <div className="form_sub_sub w-100 bt-on">
                    <div className="input_div w-30">
                        <input type="checkbox" id="type_07" name="form214_009" />
                    </div>
                    <span className="input_name jc-ct w-70">전문공사</span>
                </div>
                <div className="form_sub_sub w-100">
                </div>
            </div>
        </div>
    )
}

export default Form214;