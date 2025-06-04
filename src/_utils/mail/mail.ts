"use server"
import { getRequestForm } from "@utils/mail/requestForm";
import nodemailer from "nodemailer";

export const getMailContent = async (html: string, title: string) => {
  return {
    from: process.env.NEXT_PUBLIC_SMTP_ID,
    to: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
    subject: title,
    html,
  };
};

export const sendContactEmail = async () => {
  const title = "이게 가능할까?"
  const mailHtml = await getRequestForm(title)
  const mailContent = await getMailContent(mailHtml, title)

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.NEXT_PUBLIC_SMTP_ID,
      pass: process.env.NEXT_PUBLIC_SMTP_PW,
    },
  });

  try {
    let info = await transporter.sendMail(mailContent);
    return { success: true, message: '메일이 성공적으로 전송되었습니다!' };
  } catch (error) {
    return { success: false, message: '메일 전송에 실패했습니다. 잠시 후 다시 시도해주세요.' };
  }
}