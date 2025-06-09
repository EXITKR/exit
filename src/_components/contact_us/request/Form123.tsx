const Form123 = () => {
    return (
        <div className="form_section input_section">
            <span className="input_name jc-st w-70 br-on">
                * 종업원 수는 인증범위에 포함된 경우에는 비정규직(예: 계약직 협력업체 인원) 및 시간제 근로자도 포함<br />
                * 안전보건의 경우 조직의 관리하에 있는 사업장에 근무하는 협력업체 인원이나 협력업체의 하청 인원들도 포함
            </span>
            <span className="input_name jc-ct w-20">전체 사업장 총 종업원수</span>
            <div className="input_div w-10">
                <input type="text" id="number" name="form123_001" placeholder="0" />
            </div>
        </div>
    )
}

export default Form123;