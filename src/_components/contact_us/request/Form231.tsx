const Form231 = () => {
    return (
        <>
            <div className="form_section input_section form_2_3_1">
                <div className="form_sub">
                    <div className="form_sub_sub">
                        <span className="input_name br_no">전 인증기관명</span>
                        <div className="input_div">
                            <input type="text" id="ci_01" name="ci_01" placeholder="입력해주세요." />
                        </div>
                        <span className="input_name br_no bl_ye">인증서 유효기간</span>
                        <div className="input_div">
                            <input type="text" id="ci_02" name="ci_02" placeholder="입력해주세요." />
                        </div>
                    </div>
                    <div className="form_sub_sub">
                        <span className="input_name br_no">최근 심사일</span>
                        <div className="input_div">
                            <input type="text" id="ci_03" name="ci_03" placeholder="입력해주세요." />
                        </div>
                        <span className="input_name bl_ye">최근 심사유형</span>
                        <div className="input_div au_id">
                            <input type="radio" id="ci_04" name="ci_04" value="0" />
                        </div>
                        <span className="input_name audit">최초</span>
                        <div className="input_div au_id">
                            <input type="radio" id="ci_04" name="ci_04" value="1" />
                        </div>
                        <span className="input_name audit">갱신</span>
                        <div className="input_div au_id">
                            <input type="radio" id="ci_04" name="ci_04" value="2" />
                        </div>
                        <span className="input_name audit">사후</span>
                    </div>
                </div>
            </div>
            <div className="form_section input_section form_2_3_2">
                <span className="input_name br_no">* 전환심사인 경우 전 기관 인증서 사본 및 전회차 심사보고서(부적합 보고서 포함) 첨부</span>
            </div>
        </>
    )
}

export default Form231;