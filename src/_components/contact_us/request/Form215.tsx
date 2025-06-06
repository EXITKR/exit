const Form215 = () => {
    return (
        <div className="form_section input_section form_2_1_5">
            <span className="input_name con">기관전환 여부</span>
            <div className="input_div">
                <input type="radio" id="change_org" name="change_org_bool" value="true" />
            </div>
            <span className="input_name org">예&nbsp;<a href="#2_3">[2.3]</a>항 필수 작성</span>
            <div className="input_div">
                <input type="radio" id="change_org" name="change_org_bool" value="false" />
            </div>
            <span className="input_name org">아니오</span>
        </div>
    )
}

export default Form215;