export const getRequestToForm = async (formData: FormData) => {
    const toName: string = formData.get('to_name') as string
    //todo::메일폼 퍼블리싱
    return `
    <table width="100%" cellPadding="0" cellSpacing="0" role="presentation">
        <tr>
            <td align="center">
                <table width="600" cellPadding="0" cellSpacing="0" role="presentation" style="border-collapse: collapse; margin: 0 auto;">
                    <tr>
                        <td style="padding: 20px; text-align: center;">
                            <h1>심사 신청 확인</h1>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 20px; background-color: #ffffff;">
                            <p>안녕하세요, <strong>${toName}</strong>&nbsp;대표님!</p>
                            <p>귀사의 심사 신청이 성공적으로 접수되었습니다. 최대한 빠르게 확인 후 연락드리겠습니다.</p>
                            <p>감사합니다.</p>
                            <p>엑시트 드림</p>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 20px; background-color: #f4f4f4; text-align: center; font-size: 12px; color: #777;">
                            <p>&copy; 2025 EXIT Co. All rights reserved.</p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
`;
};