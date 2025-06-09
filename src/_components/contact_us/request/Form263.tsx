const Form263 = () => {
    return (
        <div className="form_section input_section">
            <div className="form_sub w-100">
                <div className="form_sub_sub w-100 bt-on">
                    <span className="input_name jc-st w-100">3) 안전보건경영시스템 추가 서류</span>
                </div>
                <div className="form_sub_sub w-100 bt-on">
                    <div className="input_div w-5">
                        <input type="checkbox" id="ch_13" name="form263_001" />
                    </div>
                    <span className="input_name jc-ct w-20 br-on">법규등록부</span>
                    <div className="input_div w-5">
                        <input type="checkbox" id="ch_14" name="form263_002" />
                    </div>
                    <span className="input_name jc-ct w-20 br-on">안전보건 리스크 식별자료</span>
                    <div className="input_div w-5">
                        <input type="checkbox" id="ch_15" name="form263_003" />
                    </div>
                    <span className="input_name jc-ct w-20 br-on">물질 안전 보건 자료(MSDS)</span>
                </div>
                <div className="form_sub_sub w-100">
                    <span className="input_name jc-st w-40">* 압축파일 형태로 첨부. (.zip, .rar, .7z)</span>
                    <div className="input_div w-60">
                        <input type="file" id="ch_16" name="form263_004" accept=".zip, .rar, .7z" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form263;