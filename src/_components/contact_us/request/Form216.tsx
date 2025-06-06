const Form216 = () => {
    return (
        <div className="form_section input_section form_2_1_6">
            <span className="input_name con">TL9000<br />해당사항</span>
            <div className="form_sub">
                <div className="form_sub_sub">
                    <span className="input_name tl_id_no">제품 범주명</span>
                    <div className="input_div etc_in">
                        <input type="text" id="tl_01" name="tl_01" placeholder="입력해주세요." />
                    </div>
                </div>
                <div className="form_sub_sub">
                    <div className="input_div">
                        <input type="checkbox" id="tl_02" name="tl_02" />
                    </div>
                    <span className="input_name pdc">하드웨어(H)</span>
                    <div className="input_div">
                        <input type="checkbox" id="tl_03" name="tl_03" />
                    </div>
                    <span className="input_name pdc">소프트웨어(S)</span>
                </div>
            </div>
            <div className="form_sub">
                <div className="form_sub_sub">
                    <span className="input_name tl_id_no">제품 범주 번호</span>
                    <div className="input_div etc_in tl_id_no">
                        <input type="text" id="tl_04" name="tl_04" placeholder="입력해주세요." />
                    </div>
                </div>
                <div className="form_sub_sub">
                    <div className="input_div">
                        <input type="checkbox" id="tl_05" name="tl_05" />
                    </div>
                    <span className="input_name pdc">서비스(V)</span>
                </div>
            </div>
        </div>
    )
}

export default Form216;