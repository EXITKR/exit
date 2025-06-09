const Form241 = () => {
    return (
        <div className="form_section input_section">
            <div className="form_sub w-100">
                <div className="form_sub_sub w-100 bt-on">
                    <span className="input_name jc-st w-60 br-on">인증 범위 내의 활동 중 회사구내에서 수행되지 않는 활동이 있습니까? (외주처리 유무)</span>
                    <div className="input_div w-5">
                        <input type="radio" id="cd_01" name="form241_001" value="true" />
                    </div>
                    <span className="input_name jc-ct w-15 br-on">예 (세부내역 기재)</span>
                    <div className="input_div w-5">
                        <input type="radio" id="cd_01" name="form241_001" value="false" />
                    </div>
                    <span className="input_name jc-ct w-15">아니오</span>
                </div>
                <div className="form_sub_sub w-100 bt-on">
                    <span className="input_name jc-st w-20">외주처리 업무</span>
                    <div className="input_div w-80">
                        <input type="text" id="cd_02" name="form241_002" placeholder="입력해주세요." />
                    </div>
                </div>
                <div className="form_sub_sub w-100 bt-on">
                    <span className="input_name jc-st w-60 br-on">타 인증기관에 의해 경영시스템 인증심사를 수검한 적이 있습니까?</span>
                    <div className="input_div w-5">
                        <input type="radio" id="cd_03" name="form241_003" value="true" />
                    </div>
                    <span className="input_name jc-ct w-15 br-on">예 (세부내역 기재)</span>
                    <div className="input_div w-5">
                        <input type="radio" id="cd_03" name="form241_003" value="false" />
                    </div>
                    <span className="input_name jc-ct w-15">아니오</span>
                </div>
                <div className="form_sub_sub w-100 bt-on">
                    <span className="input_name jc-st w-20">인증기관명</span>
                    <div className="input_div w-30 br-on">
                        <input type="text" id="cd_04" name="form241_004" placeholder="입력해주세요." />
                    </div>
                    <span className="input_name jc-st w-20">인증표준</span>
                    <div className="input_div w-30">
                        <input type="text" id="cd_05" name="form241_005" placeholder="입력해주세요." />
                    </div>
                </div>
                <div className="form_sub_sub w-100 bt-on">
                    <span className="input_name jc-st w-40 br-on">인증 범위 내의 현장에서 사용하는 언어는 무엇입니까?</span>
                    <div className="input_div w-5">
                        <input type="checkbox" id="cd_06" name="form241_006" />
                    </div>
                    <span className="input_name jc-ct w-10 br-on">한국어</span>
                    <div className="input_div w-5">
                        <input type="checkbox" id="cd_07" name="form241_007" />
                    </div>
                    <span className="input_name jc-ct w-10 br-on">영어</span>
                    <div className="input_div w-5">
                        <input type="checkbox" id="cd_08" name="form241_008" />
                    </div>
                    <span className="input_name jc-ct w-10">기타</span>
                    <div className="input_div w-15">
                        <input type="text" id="cd_10" name="form241_009" placeholder="입력해주세요." />
                    </div>
                </div>
                <div className="form_sub_sub w-100 bt-on">
                    <span className="input_name jc-st w-60 br-on">현장방문 시 별도의 출입절차 및 반입물품(노트북, USB 등)에 대한 규정이 있습니까?</span>
                    <div className="input_div w-5">
                        <input type="radio" id="cd_11" name="form241_010" value="true" />
                    </div>
                    <span className="input_name jc-ct w-15 br-on">예 (세부내역 기재)</span>
                    <div className="input_div w-5">
                        <input type="radio" id="cd_11" name="form241_010" value="false" />
                    </div>
                    <span className="input_name jc-ct w-15">아니오</span>
                </div>
                <div className="form_sub_sub w-100">
                    <span className="input_name jc-st w-20">출입절차 및 규정</span>
                    <div className="input_div w-80">
                        <input type="text" id="cd_12" name="form241_011" placeholder="입력해주세요." />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form241;