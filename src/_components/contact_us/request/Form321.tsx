const Form321 = (props: {
    is_scene_list: number
}) => {
    return (
        <div className="form_section input_section">
            <span className="input_name jc-st w-30 br-on">
                시공현장에 대한 정보를 기술 바랍니다.<br />
                (별지로 대체 가능합니다.)<br />
                * 본 정보를 기반으로 시공 현장에 대한 심사 프로그램이 수립됩니다.<br />
                * 인증 범위 내 시공 현장이 없을 경우 해당 인증 범위의 유지가 불가합니다.<br />
                * 시공 현장이 다수일 경우 인증원의 현장 샘플링 기준에 의하여 결정됩니다.<br />
            </span>
            <div className="form_sub w-70">
                <div className="form_sub_sub w-100 bt-on">
                    <span className="input_name jc-ct w-20 br-on">공종구분</span>
                    <span className="input_name jc-ct w-15 br-on">공정률(%)</span>
                    <span className="input_name jc-ct w-65">위치 및 현장명</span>
                </div>
                {[...Array(parseInt(props.is_scene_list.toString()))].map((item, index) => (
                    <div className="form_sub_sub w-100" key={index}>
                        <div className="input_div w-20 br-on">
                            <input type="text" id="sc_sor" name={"form321_001_" + (index + 1).toString().padStart(3, '0')} placeholder="입력해주세요." />
                        </div>
                        <div className="input_div w-15 br-on">
                            <input type="text" id="sc_per" name={"form321_002_" + (index + 1).toString().padStart(3, '0')} placeholder="0" />
                        </div>
                        <div className="input_div w-65">
                            <input type="text" id="sc_pos" name={"form321_003_" + (index + 1).toString().padStart(3, '0')} placeholder="입력해주세요." />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Form321;