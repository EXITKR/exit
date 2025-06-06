const Form124 = () => {
    return (
        <div className="form_section input_section form_1_2_4">
            <span className="input_name add">
                귀사의 사업장과 떨어진 곳에서 근무하는 인원이 있습니까? (파견직 등)
            </span>
            <div className="input_div">
                <input type="radio" id="far_people" name="far_people_bool" value="true" required />
            </div>
            <span className="input_name far">예 (세부내역 기재)</span>
            <div className="input_div">
                <input type="radio" id="far_people" name="far_people_bool" value="false" required />
            </div>
            <span className="input_name far">아니오</span>
        </div>
    )
}

export default Form124;