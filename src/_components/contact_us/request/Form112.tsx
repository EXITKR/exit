const Form112 = () => {
    return (
        <div className="form_section input_section form_1_1_2">
            <span className="input_name con">담당자 정보</span>
            <div className="form_sub">
                <div className="form_sub_sub">
                    <span className="input_name">성명/직책</span>
                    <div className="input_div">
                        <input type="text" id="role" name="name_role" placeholder="입력해주세요." required />
                    </div>
                </div>
                <div className="form_sub_sub">
                    <span className="input_name">부서</span>
                    <div className="input_div">
                        <input type="text" id="team" name="team" placeholder="입력해주세요." required />
                    </div>
                </div>
                <div className="form_sub_sub">
                    <span className="input_name">전화번호</span>
                    <div className="input_div">
                        <input type="tel" id="tel" name="tel" placeholder="입력해주세요." required />
                    </div>
                </div>
                <div className="form_sub_sub">
                    <span className="input_name">이메일</span>
                    <div className="input_div">
                        <input type="email" id="email" name="email" placeholder="입력해주세요." required />
                    </div>
                </div>
            </div>

            <div className="form_sub">
                <div className="form_sub_sub">
                    <span className="input_name">대표자</span>
                    <div className="input_div">
                        <input type="text" id="ceo" name="ceo" placeholder="입력해주세요." required />
                    </div>
                </div>
                <div className="form_sub_sub">
                    <span className="input_name">휴대폰</span>
                    <div className="input_div">
                        <input type="tel" id="mobile" name="mobile" placeholder="입력해주세요." required />
                    </div>
                </div>
                <div className="form_sub_sub">
                    <span className="input_name">팩스</span>
                    <div className="input_div">
                        <input type="text" id="fax" name="fax" placeholder="입력해주세요." required />
                    </div>
                </div>
                <div className="form_sub_sub">
                    <span className="input_name">계산서메일</span>
                    <div className="input_div">
                        <input type="email" id="bill" name="bill" placeholder="입력해주세요." required />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form112;