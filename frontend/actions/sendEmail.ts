"use server";

import { Resend } from "resend";
import { getErrorMessage, validateString } from "../lib/utils";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const message = formData.get("message");
  const senderEmail = formData.get("senderEmail");

  if (!validateString(message, 500) || !validateString(senderEmail, 5000)) {
    throw new Error("Invalid form data");
  }
  try {
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "zoey42zhang@gmail.com",
      subject: "Message from contact form",
      replyTo: senderEmail as string,
      text: message as string,
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
};
