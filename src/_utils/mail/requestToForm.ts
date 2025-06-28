export const getRequestToForm = async (formData: FormData) => {
    const toName: string = formData.get('form112_001') as string
    const toMessage: string = formData.get('form400_001') as string
    return `
    <table width="100%" cellPadding="0" cellSpacing="0" role="presentation">
        <tr>
            <td align="center">
                <table width="600" cellPadding="0" cellSpacing="0" role="presentation" style="border-collapse: collapse; margin: 0 auto;">
                    <tr>
                        <td style="padding: 20px; text-align: center;">
                            <h1>인증 신청서 접수 확인 요망</h1>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 20px; background-color: #ffffff;">
                            <p><strong>${toName}</strong>&nbsp;대표님의 인증 신청이 접수되었습니다.</p>
                            <p>빠른 답변 바랍니다.</p>
                            <div style="border-left: 4px solid #537571; padding: 10px; margin: 20px 0; background-color: #e9ecef">
                                <p><strong>추가 문의 내용:</strong></p>
                                <pre>${toMessage}</pre>
                            </div>
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