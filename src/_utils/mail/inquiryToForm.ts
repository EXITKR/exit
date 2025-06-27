export const getInquiryToForm = (formData: FormData) => {
    const toName: string = formData.get('to_name') as string
    const toEmail: string = formData.get('to_email') as string
    const toMessage: string = formData.get('to_message') as string
    return `
    <table width="100%" cellPadding="0" cellSpacing="0" role="presentation">
        <tr>
            <td align="center">
                <table width="600" cellPadding="0" cellSpacing="0" role="presentation"
                    style="border-collapse: collapse; margin: 0 auto;">
                    <tr>
                        <td style="padding: 20px; text-align: center;">
                            <h1>문의 접수 확인 요망</h1>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 20px; background-color: #ffffff;">
                            <p><strong>${toName}</strong>대표님의 문의가 접수되었습니다.</p>
                            <p>빠른 답변 바랍니다.</p>
                            <div style="border-left: 4px solid #537571; padding: 10px; margin: 20px 0; background-color: #e9ecef">
                                <p><strong>문의 내용:</strong></p>
                                <p>${toMessage}</p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td
                            style="padding: 20px; background-color: #f4f4f4; text-align: center; font-size: 12px; color: #777;">
                            <p>&copy; 2025 EXIT Co. All rights reserved.</p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
`;
};