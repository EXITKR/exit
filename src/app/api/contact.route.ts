// import { getMailContent, transporter } from "@utils/mail/mail";

// export async function POST(req: Request) {
//   // Nodemailer 이메일 전송 로직
//   const body = await req.json();
//   const mailContent = getMailContent(body.html, body.title)
//   return transporter.sendMail(mailContent)
//     .then(
//       () =>
//         new Response(JSON.stringify({ message: 'SUCCESS' }), {
//           status: 200,
//         })
//     )
//     .catch((error) => {
//       console.error(error);

//       return new Response(JSON.stringify({ message: 'FAILURE' }), {
//         status: 500,
//       });
//     });
// }