const Form111 = () => {
    return (
        <div className="form_section input_section form_1_1_1">
            <span className="input_name">조직명</span>
            <span className="input_name">(국문)</span>
            <div className="input_div">
                <input type="name" id="name" name="name_kr" placeholder="입력해주세요." required />
            </div>
            <span className="input_name">(영문)</span>
            <div className="input_div">
                <input type="name" id="name" name="name_en" placeholder="입력해주세요." required />
            </div>
        </div>
    )
}

export default Form111;