const Form262 = () => {
    return (
        <div className="form_section input_section">
            <div className="form_sub w-100">
                <div className="form_sub_sub w-100 bt-on">
                    <span className="input_name jc-st w-100">2) 환경영영시스템 추가 서류</span>
                </div>
                <div className="form_sub_sub w-100 bt-on">
                    <div className="input_div w-5">
                        <input type="checkbox" id="ch_09" name="form262_001" />
                    </div>
                    <span className="input_name jc-ct w-20 br-on">환경영향평가표</span>
                    <div className="input_div w-5">
                        <input type="checkbox" id="ch_10" name="form262_002" />
                    </div>
                    <span className="input_name jc-ct w-20 br-on">법규등록부</span>
                    <div className="input_div w-5">
                        <input type="checkbox" id="ch_11" name="form262_003" />
                    </div>
                    <span className="input_name jc-ct w-20 br-on">위탁계약서(위탁처리 시)</span>
                </div>
                <div className="form_sub_sub w-100">
                    <span className="input_name jc-st w-40">* 압축파일 형태로 첨부. (.zip, .rar, .7z)</span>
                    <div className="input_div w-60">
                        <input type="file" id="ch_12" name="form262_004" accept=".zip, .rar, .7z" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form262;