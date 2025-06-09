const Form232 = () => {
    return (
        <div className="form_section input_section">
            <span className="input_name jc-st w-60">
                * 전환심사인 경우 전 기관 인증서 사본 및 전회차 심사보고서(부적합 보고서 포함) 첨부<br/>
                * 압축파일 형태로 첨부. (.zip, .rar, .7z)
            </span>
            <div className="input_div w-40">
                <input type="file" id="ci_05" name="form232_001" accept=".zip, .rar, .7z" />
            </div>
        </div>
    )
}

export default Form232;