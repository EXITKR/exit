const Form124 = () => {
    return (
        <div className="form_section input_section">
            <span className="input_name jc-st w-60 br-on">
                귀사의 사업장과 떨어진 곳에서 근무하는 인원이 있습니까? (파견직 등)
            </span>
            <div className="input_div w-5">
                <input type="radio" id="far_people" name="form124_001" value="true" />
            </div>
            <span className="input_name jc-ct far w-15 br-on">예 (세부내역 기재)</span>
            <div className="input_div w-5">
                <input type="radio" id="far_people" name="form124_001" value="false" />
            </div>
            <span className="input_name jc-ct far w-15">아니오</span>
        </div>
    )
}

export default Form124;