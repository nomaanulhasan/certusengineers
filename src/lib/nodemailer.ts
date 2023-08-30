import { createTransport } from "nodemailer";

const toEmail = process.env.TO_EMAIL;
const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

export const transporter = createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass,
  },
});

export const mailOptions = {
  from: email,
  to: toEmail,
};
