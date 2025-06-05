export const getInquiryForm = (formData: FormData) => {
  const toMessage: string = formData.get('to_message') as string
  return `
    <div>
        <h1>문의사항이 도착했습니다.</h1>
        <h2>${toMessage}</h2>
        <p>문의사항을 확인해주세요.</p>
    </div>
`;
};