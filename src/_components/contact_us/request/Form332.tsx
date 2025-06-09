const Form332 = (props: {
    is_process_list: number
}) => {
    return (
        <div className="form_section input_section">
            <div className="form_sub w-100">
                <div className="form_sub_sub w-100 bt-on">
                    <span className="input_name jc-ct w-20 br-on">사업장명</span>
                    <span className="input_name jc-ct w-40 br-on">실행되는 프로세스</span>
                    <span className="input_name jc-ct w-40">해당 요구사항 및 성과지표 핸드북 요구사항</span>
                </div>
                {[...Array(parseInt(props.is_process_list.toString()))].map((item, index) => (
                    <div className="form_sub_sub w-100" key={index}>
                        <div className="input_div w-20 br-on">
                            <input type="text" id="tlp_nam" name={"form332_001_" + (index + 1).toString().padStart(3, '0')} placeholder="입력해주세요." />
                        </div>
                        <div className="input_div w-40 br-on">
                            <input type="text" id="tlp_pro" name={"form332_002_" + (index + 1).toString().padStart(3, '0')} placeholder="입력해주세요." />
                        </div>
                        <div className="input_div w-40">
                            <input type="text" id="tlp_fuc" name={"form332_003_" + (index + 1).toString().padStart(3, '0')} placeholder="입력해주세요." />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Form332;