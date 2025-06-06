const Form125 = (props: {
    is_position_list: number
}) => {
    return (
        <div className="form_section input_section form_1_2_5">
            <span className="input_name con">
                해당인원, 사업장 위치<br />
                및 업무 등을<br />
                기술하여 주십시오
            </span>
            <div className="form_sub">
                <div className="form_sub_sub">
                    <span className="input_name num">해당인원 수</span>
                    <span className="input_name tas">주요 업무</span>
                    <span className="input_name pos">사업장 위치</span>
                </div>
                {[...Array(parseInt(props.is_position_list.toString()))].map((item, index) => (
                    <div className="form_sub_sub" key={index}>
                        <div className="input_div num">
                            <input type="text" id="1_people_num" name={"1_people_num" + (index + 1)} placeholder="0" />
                        </div>
                        <div className="input_div tas">
                            <input type="text" id="1_major_task" name={"1_major_task" + (index + 1)} placeholder="입력해주세요." />
                        </div>
                        <div className="input_div pos">
                            <input type="text" id="1_company_position" name={"1_company_position" + (index + 1)} placeholder="입력해주세요." />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Form125;