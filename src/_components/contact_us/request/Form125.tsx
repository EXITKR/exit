const Form125 = (props: {
    is_position_list: number
}) => {
    return (
        <div className="form_section input_section">
            <span className="input_name jc-ct w-20 br-on">
                해당인원, 사업장 위치<br />
                및 업무 등을<br />
                기술하여 주십시오
            </span>
            <div className="form_sub w-80">
                <div className="form_sub_sub w-100 bt-on">
                    <span className="input_name jc-ct w-10 br-on">해당인원 수</span>
                    <span className="input_name jc-ct w-30 br-on">주요 업무</span>
                    <span className="input_name jc-ct w-60">사업장 위치</span>
                </div>
                {[...Array(parseInt(props.is_position_list.toString()))].map((item, index) => (
                    <div className="form_sub_sub w-100" key={index}>
                        <div className="input_div w-10 br-on">
                            <input type="text" id="1_people_num" name={"form125_001_" + (index + 1).toString().padStart(3, '0')} placeholder="0" />
                        </div>
                        <div className="input_div w-30 br-on">
                            <input type="text" id="1_major_task" name={"form125_002_" + (index + 1).toString().padStart(3, '0')} placeholder="입력해주세요." />
                        </div>
                        <div className="input_div w-60">
                            <input type="text" id="1_company_position" name={"form125_003_" + (index + 1).toString().padStart(3, '0')} placeholder="입력해주세요." />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Form125;