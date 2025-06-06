const Form214 = () => {
    return (
        <div className="form_section input_section form_2_1_4">
            <span className="input_name con">유형<br />(해당사항<br />모두 체크)</span>
            <div className="form_sub">
                <div className="form_sub_sub">
                    <div className="input_div">
                        <input type="checkbox" id="type_01" name="type_01" />
                    </div>
                    <span className="input_name">설계 / 개발(연구)</span>
                </div>
                <div className="form_sub_sub">
                    <div className="input_div">
                        <input type="checkbox" id="type_02" name="type_02" />
                    </div>
                    <span className="input_name">도소매</span>
                </div>
            </div>
            <div className="form_sub">
                <div className="form_sub_sub">
                    <div className="input_div">
                        <input type="checkbox" id="type_03" name="type_03" />
                    </div>
                    <span className="input_name">제조</span>
                </div>
                <div className="form_sub_sub">
                    <div className="input_div">
                        <input type="checkbox" id="type_04" name="type_04" />
                    </div>
                    <span className="input_name">서비스</span>
                </div>
            </div>
            <div className="form_sub">
                <div className="form_sub_sub">
                    <div className="input_div">
                        <input type="checkbox" id="type_05" name="type_05" />
                    </div>
                    <span className="input_name">건설</span>
                </div>
                <div className="form_sub_sub">
                    <div className="input_div">
                        <input type="checkbox" id="type_06" name="type_06" />
                    </div>
                    <span className="input_name">기타</span>
                </div>
            </div>
            <div className="form_sub">
                <div className="form_sub_sub">
                    <div className="input_div">
                        <input type="checkbox" id="type_07" name="type_07" />
                    </div>
                    <span className="input_name">엔지니어링/감리</span>
                </div>
                <div className="form_sub_sub">
                    <div className="input_div etc_in">
                        <input type="text" id="type_06_text" name="type_06_text" placeholder="입력해주세요." />
                    </div>
                </div>
            </div>
            <div className="form_sub">
                <div className="form_sub_sub">
                    <div className="input_div">
                        <input type="checkbox" id="type_07" name="type_07" />
                    </div>
                    <span className="input_name ty_id_no">전문공사</span>
                </div>
                <div className="form_sub_sub">
                </div>
            </div>
        </div>
    )
}

export default Form214;