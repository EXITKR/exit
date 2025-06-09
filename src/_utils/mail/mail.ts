"use server"
import { getInquiryFromForm } from "@utils/mail/inquiryFromForm";
import { getRequestFromForm } from "@utils/mail/requestFromForm";
import { getInquiryToForm } from "@utils/mail/inquiryToForm";
import { getRequestToForm } from "@utils/mail/requestToForm";
import nodemailer from "nodemailer";

export const getToMailContent = async (title: string, html: string) => {
  return {
    from: process.env.NEXT_PUBLIC_SMTP_ID,
    to: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
    subject: title,
    html,
  };
};

export const getFromMailContent = async (title: string, html: string, email: string) => {
  return {
    from: process.env.NEXT_PUBLIC_SMTP_ID,
    to: email,
    subject: title,
    html,
  };
};

export const sendContactEmail = async (formData: FormData, category: string) => {
  let toEmail: string = ""
  const toName: string = formData.get('to_name') as string
  const toSubject: string = formData.get('to_subject') as string
  let toMailHtml: string = ""
  let fromMailHtml: string = ""
  if (category === "심사신청") {
    toEmail = formData.get('form112_004') as string
    toMailHtml = await getRequestToForm(formData) as string
    fromMailHtml = await getRequestFromForm(formData) as string
  } else {
    toEmail = formData.get('to_email') as string
    toMailHtml = await getInquiryToForm(formData) as string
    fromMailHtml = await getInquiryFromForm(formData) as string
  }

  const mailTitle = "[" + category + "] " + toSubject + " - " + toName + " (" + toEmail + ")"

  const toMailContent = await getToMailContent(mailTitle, toMailHtml)
  const fromMailContent = await getFromMailContent(mailTitle, fromMailHtml, toEmail)

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
    await transporter.sendMail(toMailContent);
    await transporter.sendMail(fromMailContent);
    return { success: true, message: '메일이 성공적으로 전송되었습니다!'};
  } catch (error) {
    return { success: false, message: '메일 전송에 실패했습니다. 잠시 후 다시 시도해주세요. ' + error };
  }
}