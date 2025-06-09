const Form216 = () => {
    return (
        <div className="form_section input_section">
            <span className="input_name jc-ct w-10 br-on">TL9000<br />해당사항</span>
            <div className="form_sub w-45 br-on">
                <div className="form_sub_sub w-100 bt-on">
                    <span className="input_name jc-ct w-30">제품 범주명</span>
                    <div className="input_div w-70">
                        <input type="text" id="tl_01" name="form216_001" placeholder="입력해주세요." />
                    </div>
                </div>
                <div className="form_sub_sub w-100">
                    <div className="input_div w-10">
                        <input type="checkbox" id="tl_02" name="form216_002" />
                    </div>
                    <span className="input_name jc-ct w-40 br-on">하드웨어(H)</span>
                    <div className="input_div w-10">
                        <input type="checkbox" id="tl_03" name="form216_003" />
                    </div>
                    <span className="input_name jc-ct w-40">소프트웨어(S)</span>
                </div>
            </div>
            <div className="form_sub w-45">
                <div className="form_sub_sub w-100 bt-on">
                    <span className="input_name jc-ct w-30">제품 범주 번호</span>
                    <div className="input_div w-70">
                        <input type="text" id="tl_04" name="form216_004" placeholder="입력해주세요." />
                    </div>
                </div>
                <div className="form_sub_sub w-100">
                    <div className="input_div w-10">
                        <input type="checkbox" id="tl_05" name="form216_005" />
                    </div>
                    <span className="input_name jc-ct w-40 br-on">서비스(V)</span>
                </div>
            </div>
        </div>
    )
}

export default Form216;