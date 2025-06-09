const Form261 = () => {
    return (
        <div className="form_section input_section">
            <div className="form_sub w-100">
                <div className="form_sub_sub w-100 bt-on">
                    <span className="input_name jc-st w-100">1) 공통사항</span>
                </div>
                <div className="form_sub_sub w-100 bt-on">
                    <div className="input_div w-5">
                        <input type="checkbox" id="ch_01" name="form261_001" />
                    </div>
                    <span className="input_name jc-ct w-20 br-on">설문서</span>
                    <div className="input_div w-5">
                        <input type="checkbox" id="ch_02" name="form261_002" />
                    </div>
                    <span className="input_name jc-ct w-20 br-on">제조공정도(업무흐름도)</span>
                    <div className="input_div w-5">
                        <input type="checkbox" id="ch_03" name="form261_003" />
                    </div>
                    <span className="input_name jc-ct w-20 br-on">사업자등록증</span>
                    <div className="input_div w-5">
                        <input type="checkbox" id="ch_04" name="form261_004" />
                    </div>
                    <span className="input_name jc-ct w-20">조직도</span>
                </div>
                <div className="form_sub_sub w-100 bt-on">
                    <div className="input_div w-5">
                        <input type="checkbox" id="ch_05" name="form261_005" />
                    </div>
                    <span className="input_name jc-ct w-20 br-on">공장 등록증(해당 시)</span>
                    <div className="input_div w-5">
                        <input type="checkbox" id="ch_06" name="form261_006" />
                    </div>
                    <span className="input_name jc-ct w-20 br-on">사업관련 면허증(해당 시)</span>
                    <div className="input_div w-5">
                        <input type="checkbox" id="ch_07" name="form261_007" />
                    </div>
                    <span className="input_name jc-ct w-40 br-on">인원증빙서류(4대보험가입자, 직원명부 외)</span>
                </div>
                <div className="form_sub_sub w-100">
                    <span className="input_name jc-st w-40">* 압축파일 형태로 첨부. (.zip, .rar, .7z)</span>
                    <div className="input_div w-60">
                        <input type="file" id="ch_08" name="form261_008" accept=".zip, .rar, .7z" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form261;