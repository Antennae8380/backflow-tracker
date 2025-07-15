// === lib/mail.js: START ===
import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: +process.env.SMTP_PORT,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendAlert(to, subject, text) {
  await transporter.sendMail({
    from: process.env.SMTP_FROM,
    to,
    subject,
    text,
  });
}
// === lib/mail.js: END ===
