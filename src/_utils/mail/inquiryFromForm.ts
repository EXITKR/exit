export const getInquiryFromForm = (formData: FormData) => {
    const toName: string = formData.get('to_name') as string
    const toMessage: string = formData.get('to_message') as string
    return `
    <table width="100%" cellPadding="0" cellSpacing="0" role="presentation">
        <tr>
            <td align="center">
                <table width="600" cellPadding="0" cellSpacing="0" role="presentation" style="border-collapse: collapse; margin: 0 auto;">
                    <tr>
                        <td style="padding: 20px; text-align: center;">
                            <h1>문의 접수 완료</h1>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 20px; background-color: #ffffff;">
                            <p>안녕하세요, <strong>${toName}</strong>&nbsp;대표님!</p>
                            <p>귀사의 문의가 성공적으로 접수되었습니다. 최대한 빠르게 확인 후 연락드리겠습니다.</p>
                            <div style="border-left: 4px solid #537571; padding: 10px; margin: 20px 0; background-color: #e9ecef">
                                <p><strong>문의 내용:</strong></p>
                                <pre>${toMessage}</pre>
                            </div>
                            <p>감사합니다.</p>
                            <p>엑시트 드림</p>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 20px; background-color: #ffffff; font-size: 12px; color: #bdbdbd;">
                            <p>본 메일의 발신인 메일 주소&nbsp;(exitmail00@gmail.com)&nbsp;는 발신전용 메일입니다.</p>
                            <p>따라서 회신 내용을 확인할 수 없습니다.</p>
                            <br/>
                            <p>추가문의 : <a href="mailto:exitinfo08@gmail.com" target="_blank" style="color: #bdbdbd;">exitinfo08@gmail.com</a></p>
                            <p>홈페이지 : <a href="https://www.exitco.kr" target="_blank" style="color: #bdbdbd;">exitco.kr</a></p>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 20px; background-color: #1c2524; text-align: center; font-size: 12px; color: #fff;">
                            <p>&copy; 2025 EXIT Co. All rights reserved.</p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
`;
};