"use server"
import { getInquiryForm } from "@utils/mail/inquiryForm";
import { getRequestForm } from "@utils/mail/requestForm";
import nodemailer from "nodemailer";

export const getMailContent = async (title: string, html: string) => {
  return {
    from: process.env.NEXT_PUBLIC_SMTP_ID,
    to: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
    subject: title,
    html,
  };
};

export const sendContactEmail = async (formData: FormData, category: string) => {
  const toEmail: string = formData.get('to_email') as string
  const toUser: string = formData.get('to_user') as string
  const toSubject: string = formData.get('to_subject') as string
  const mailTitle = "[" + category + "] " + toSubject + " - " + toUser + " (" + toEmail + ")"
  let mailHtml: string = ""
  if (category === "심사신청") {
    mailHtml = await getRequestForm(formData) as string
  } else {
    mailHtml = await getInquiryForm(formData) as string
  }
  const mailContent = await getMailContent(mailTitle, mailHtml)

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
    await transporter.sendMail(mailContent);
    return { success: true, message: '메일이 성공적으로 전송되었습니다!'};
  } catch (error) {
    return { success: false, message: '메일 전송에 실패했습니다. 잠시 후 다시 시도해주세요. ' + error };
  }
}