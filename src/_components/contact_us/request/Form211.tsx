const Form211 = () => {
    return (
        <div className="form_section input_section form_2_1_1">
            <span className="input_name con">신청 표준</span>
            <div className="form_sub">
                <div className="form_sub_sub">
                    <div className="input_div">
                        <input type="checkbox" id="iso_01" name="iso_01" />
                    </div>
                    <span className="input_name">ISO 9001:2015</span>
                </div>
                <div className="form_sub_sub">
                    <div className="input_div">
                        <input type="checkbox" id="iso_02" name="iso_02" />
                    </div>
                    <span className="input_name">ISO 45001:2018</span>
                </div>
            </div>
            <div className="form_sub">
                <div className="form_sub_sub">
                    <div className="input_div">
                        <input type="checkbox" id="iso_03" name="iso_03" />
                    </div>
                    <span className="input_name">ISO 14001:2015</span>
                </div>
                <div className="form_sub_sub">
                    <div className="input_div">
                        <input type="checkbox" id="iso_04" name="iso_04" />
                    </div>
                    <span className="input_name">기타</span>
                </div>
            </div>
            <div className="form_sub">
                <div className="form_sub_sub">
                    <div className="input_div">
                        <input type="checkbox" id="iso_05" name="iso_05" />
                    </div>
                    <span className="input_name">TL 9000</span>
                </div>
                <div className="form_sub_sub">
                    <div className="input_div etc_in">
                        <input type="text" id="iso_04_text" name="iso_04_text" placeholder="입력해주세요." />
                    </div>
                </div>
            </div>
            <div className="form_sub">
                <div className="form_sub_sub">
                    <span className="input_name rr_ti">요구사항 R</span>
                    <div className="input_div rr_id">
                        <input className="rr_in" type="text" id="iso_06" name="iso_06" placeholder="0" />
                    </div>
                </div>
                <div className="form_sub_sub"></div>
            </div>
            <div className="form_sub">
                <div className="form_sub_sub">
                    <span className="input_name rr_ti">성과지표 R</span>
                    <div className="input_div rr_id_no">
                        <input className="rr_in" type="text" id="iso_06" name="iso_06" placeholder="0" />
                    </div>
                </div>
                <div className="form_sub_sub"></div>
            </div>
        </div>
    )
}

export default Form211;