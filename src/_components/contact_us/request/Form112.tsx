const Form112 = () => {
    return (
        <div className="form_section input_section">
            <span className="input_name jc-ct w-20 br-on">담당자 정보</span>
            <div className="form_sub w-40 br-on">
                <div className="form_sub_sub w-100 bt-on">
                    <span className="input_name jc-ct w-25">성명/직책</span>
                    <div className="input_div w-75">
                        <input type="text" id="role" name="form112_001" placeholder="입력해주세요." required />
                    </div>
                </div>
                <div className="form_sub_sub w-100 bt-on">
                    <span className="input_name jc-ct w-25">부서</span>
                    <div className="input_div w-75">
                        <input type="text" id="team" name="form112_002" placeholder="입력해주세요." required />
                    </div>
                </div>
                <div className="form_sub_sub w-100 bt-on">
                    <span className="input_name jc-ct w-25">전화번호</span>
                    <div className="input_div w-75">
                        <input type="tel" id="tel" name="form112_003" placeholder="입력해주세요." required />
                    </div>
                </div>
                <div className="form_sub_sub w-100">
                    <span className="input_name jc-ct w-25">이메일</span>
                    <div className="input_div w-75">
                        <input type="email" id="email" name="form112_004" placeholder="입력해주세요." required />
                    </div>
                </div>
            </div>

            <div className="form_sub w-40">
                <div className="form_sub_sub w-100 bt-on">
                    <span className="input_name jc-ct w-25">대표자</span>
                    <div className="input_div w-75">
                        <input type="text" id="ceo" name="form112_005" placeholder="입력해주세요." required />
                    </div>
                </div>
                <div className="form_sub_sub w-100 bt-on">
                    <span className="input_name jc-ct w-25">휴대폰</span>
                    <div className="input_div w-75">
                        <input type="tel" id="mobile" name="form112_006" placeholder="입력해주세요." required />
                    </div>
                </div>
                <div className="form_sub_sub w-100 bt-on">
                    <span className="input_name jc-ct w-25">팩스</span>
                    <div className="input_div w-75">
                        <input type="text" id="fax" name="form112_007" placeholder="입력해주세요." required />
                    </div>
                </div>
                <div className="form_sub_sub w-100">
                    <span className="input_name jc-ct w-25">계산서메일</span>
                    <div className="input_div w-75">
                        <input type="email" id="bill" name="form112_008" placeholder="입력해주세요." required />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form112;