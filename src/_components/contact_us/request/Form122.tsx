const Form122 = (props: {
    is_company_list: number,
}) => {

    return (
        <>
            <div className="form_section input_section form_1_2_2">
                <span className="input_name">본사</span>
                <div className="form_sub">
                    <div className="form_sub_sub">
                        <span className="input_name">국문)</span>
                        <div className="input_div">
                            <input type="text" id="address" name="address_kr_01" placeholder="입력해주세요." />
                        </div>
                    </div>
                    <div className="form_sub_sub">
                        <span className="input_name">영문)</span>
                        <div className="input_div">
                            <input type="text" id="address" name="address_kr_01" placeholder="입력해주세요." />
                        </div>
                    </div>
                </div>

                <div className="input_div">
                    <input type="text" id="number" name="permanent_num_01" placeholder="0" />
                </div>

                <div className="input_div">
                    <input type="text" id="number" name="shift2_num_01" placeholder="0" />
                </div>

                <div className="input_div">
                    <input type="text" id="number" name="shift3_num_01" placeholder="0" />
                </div>

                <div className="input_div">
                    <input type="text" id="number" name="daily_num_01" placeholder="0" />
                </div>

                <div className="input_div">
                    <input type="text" id="number" name="total_num_01" placeholder="0" />
                </div>
            </div>
            {[...Array(parseInt(props.is_company_list.toString()))].map((item, index) => (
                <div className="form_section input_section form_1_2_2" key={index}>
                    <span className="input_name">{"사업장 " + (index + 1)}</span>
                    <div className="form_sub">
                        <div className="form_sub_sub">
                            <span className="input_name">국문)</span>
                            <div className="input_div">
                                <input type="text" id="address" name={"address_kr_0" + (index + 1)} placeholder="입력해주세요." />
                            </div>
                        </div>
                        <div className="form_sub_sub">
                            <span className="input_name">영문)</span>
                            <div className="input_div">
                                <input type="text" id="address" name={"address_en_0" + (index + 1)} placeholder="입력해주세요." />
                            </div>
                        </div>
                    </div>

                    <div className="input_div">
                        <input type="text" id="number" name={"permanent_num_0" + (index + 1)} placeholder="0" />
                    </div>

                    <div className="input_div">
                        <input type="text" id="number" name={"shift2_num_0" + (index + 1)} placeholder="0" />
                    </div>

                    <div className="input_div">
                        <input type="text" id="number" name={"shift3_num_0" + (index + 1)} placeholder="0" />
                    </div>

                    <div className="input_div">
                        <input type="text" id="number" name={"daily_num_0" + (index + 1)} placeholder="0" />
                    </div>

                    <div className="input_div">
                        <input type="text" id="number" name={"total_num_0" + (index + 1)} placeholder="0" />
                    </div>
                </div>
            ))}
        </>
    )
}

export default Form122;