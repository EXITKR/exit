const Form111 = () => {
    return (
        <div className="form_section input_section">
            <span className="input_name jc-ct w-20 br-on">조직명</span>
            <span className="input_name jc-ct w-10">(국문)</span>
            <div className="input_div w-30 br-on">
                <input type="name" id="name" name="form111_001" placeholder="입력해주세요." required />
            </div>
            <span className="input_name jc-ct w-10">(영문)</span>
            <div className="input_div w-30">
                <input type="name" id="name" name="form111_002" placeholder="입력해주세요." required />
            </div>
        </div>
    )
}

export default Form111;