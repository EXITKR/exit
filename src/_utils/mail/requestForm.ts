export const getRequestForm = async (formData: FormData) => {
  return `
    <div>
        <h1>문의사항이 도착했습니다.</h1>
        <h2>${formData}</h2>
        <p>문의사항을 확인해주세요.</p>
    </div>
`;
};