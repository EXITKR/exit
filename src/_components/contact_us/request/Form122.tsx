const Form122 = (props: {
    is_company_list: number,
}) => {

    return (
        <>
            <div className="form_section input_section">
                <span className="input_name jc-ct w-10 br-on">본사</span>
                <div className="form_sub w-40 br-on">
                    <div className="form_sub_sub w-100 bt-on">
                        <span className="input_name jc-ct w-15">국문)</span>
                        <div className="input_div w-85">
                            <input type="text" id="address" name="form122_001" placeholder="입력해주세요." />
                        </div>
                    </div>
                    <div className="form_sub_sub w-100">
                        <span className="input_name jc-ct w-15">영문)</span>
                        <div className="input_div w-85">
                            <input type="text" id="address" name="form122_002" placeholder="입력해주세요." />
                        </div>
                    </div>
                </div>

                <div className="input_div w-10 br-on">
                    <input type="text" id="number" name="form122_003" placeholder="0" />
                </div>

                <div className="input_div w-10 br-on">
                    <input type="text" id="number" name="form122_004" placeholder="0" />
                </div>

                <div className="input_div w-10 br-on">
                    <input type="text" id="number" name="form122_005" placeholder="0" />
                </div>

                <div className="input_div w-10 br-on">
                    <input type="text" id="number" name="form122_006" placeholder="0" />
                </div>

                <div className="input_div w-10">
                    <input type="text" id="number" name="form122_007" placeholder="0" />
                </div>
            </div>
            {[...Array(parseInt(props.is_company_list.toString()))].map((item, index) => (
                <div className="form_section input_section" key={index}>
                    <span className="input_name jc-ct w-10 br-on">{"사업장 " + (index + 1)}</span>
                    <div className="form_sub w-40 br-on">
                        <div className="form_sub_sub w-100 bt-on">
                            <span className="input_name jc-ct w-15">국문)</span>
                            <div className="input_div w-85">
                                <input type="text" id="address" name={"form122_008_" + (index + 1).toString().padStart(3, '0')} placeholder="입력해주세요." />
                            </div>
                        </div>
                        <div className="form_sub_sub w-100">
                            <span className="input_name jc-ct w-15">영문)</span>
                            <div className="input_div w-85">
                                <input type="text" id="address" name={"form122_009_" + (index + 1).toString().padStart(3, '0')} placeholder="입력해주세요." />
                            </div>
                        </div>
                    </div>

                    <div className="input_div w-10 br-on">
                        <input type="text" id="number" name={"form122_010_" + (index + 1).toString().padStart(3, '0')} placeholder="0" />
                    </div>

                    <div className="input_div w-10 br-on">
                        <input type="text" id="number" name={"form122_011_" + (index + 1).toString().padStart(3, '0')} placeholder="0" />
                    </div>

                    <div className="input_div w-10 br-on">
                        <input type="text" id="number" name={"form122_012_" + (index + 1).toString().padStart(3, '0')} placeholder="0" />
                    </div>

                    <div className="input_div w-10 br-on">
                        <input type="text" id="number" name={"form122_013_" + (index + 1).toString().padStart(3, '0')} placeholder="0" />
                    </div>

                    <div className="input_div w-10">
                        <input type="text" id="number" name={"form122_014_" + (index + 1).toString().padStart(3, '0')} placeholder="0" />
                    </div>
                </div>
            ))}
        </>
    )
}

export default Form122;