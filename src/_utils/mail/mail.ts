"use server"
import { getInquiryFromForm } from "@utils/mail/inquiryFromForm";
import { getRequestFromForm } from "@utils/mail/requestFromForm";
import { getInquiryToForm } from "@utils/mail/inquiryToForm";
import { getRequestToForm } from "@utils/mail/requestToForm";
import nodemailer from "nodemailer";
import { attachmentsPathInterface } from "@interfaces/pagesInterface";

export const getRequestMailContent = async (title: string, html: string, files: attachmentsPathInterface[]) => {
  return {
    from: process.env.NEXT_PUBLIC_SMTP_ID,
    to: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
    subject: title,
    html,
    attachments: files
  };
};

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

export const sendContactEmail = async (formData: FormData, category: string, files: attachmentsPathInterface[]) => {
  let toEmail: string = ""
  let toName: string = ""
  let toSubject: string = ""
  let toMailHtml: string = ""
  let fromMailHtml: string = ""

  let toMailContent: {
    from: string | undefined,
    to: string | undefined,
    subject: string | undefined,
    html: string | undefined,
    attachments?: attachmentsPathInterface[] | undefined
  }
  if (category === "인증신청") {
    const company = formData.get('form111_001') as string 
    toName = formData.get('form112_001') as string
    toEmail = formData.get('form112_004') as string
    toSubject = "인증신청서 및 설문서 접수 <" + company + ">"
    toMailHtml = await getRequestToForm(formData) as string
    fromMailHtml = await getRequestFromForm(formData) as string
  } else {
    toName = formData.get('to_name') as string
    toEmail = formData.get('to_email') as string
    toSubject = formData.get('to_subject') as string
    toMailHtml = await getInquiryToForm(formData) as string
    fromMailHtml = await getInquiryFromForm(formData) as string
  }

  const mailTitle = "[" + category + "] " + toSubject + " - " + toName + " (" + toEmail + ")"

  if (category === "인증신청") {
    toMailContent = await getRequestMailContent(mailTitle, toMailHtml, files)
  } else {
    toMailContent = await getToMailContent(mailTitle, toMailHtml)
  }
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