import * as yup from "yup";

export const contactSchema = yup
  .object({
    msg: yup
      .string()
      .required("Message is required.")
      .max(250, "Max 250 chars. allowed."),
    name: yup
      .string()
      .required("Name is required.")
      .max(30, "Max 30 chars. allowed."),
    email: yup
      .string()
      .required("Email is required.")
      .email("Enter a valid email."),
  })
  .required();
