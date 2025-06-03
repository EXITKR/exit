import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.NEXT_PUBLIC_SMTP_ID,
    pass: process.env.NEXT_PUBLIC_SMTP_PW,
  },
});

export const getMailContent = (html: string, title: string) => {
  return {
    from: process.env.NEXT_PUBLIC_SMTP_ID,
    to: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
    subject: title,
    html,
  };
};