"use server";

import nodemailer from "nodemailer";
import { z } from "zod";

// 1. Validate the structure, types, and lengths of incoming data
const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name is too long"),
  email: z.string().email("Invalid email address").max(100, "Email is too long"),
  message: z.string().min(1, "Message is required").max(5000, "Message is too long"),
  honeypot: z.string().max(0, "Bot detected"), // Should be completely empty
});

export async function sendEmail(formData: FormData) {
  // Extract and trim fields to prevent hidden whitespace bypasses
  const name = (formData.get("name") as string)?.trim() || "";
  const email = (formData.get("email") as string)?.trim() || "";
  const message = (formData.get("message") as string)?.trim() || "";
  const honeypot = (formData.get("botcheck") as string) || "";

  // 2. Parse strictly with our Zod Schema
  const parsed = contactSchema.safeParse({ name, email, message, honeypot });

  if (!parsed.success) {
    // Return early if validation fails or a bot filled out the hidden field
    return { error: parsed.error.issues[0].message };
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    // 3. Add a clear disclaimer in the email body that the sender identity is unverified
    const mailText = `
New message from your portfolio contact form!
      
Name: ${parsed.data.name}
Email: ${parsed.data.email}
      
--- MESSAGE ---
${parsed.data.message}
----------------

⚠️ SECURITY WARNING: 
This message was sent via your website's contact form. The system cannot 
verify that the sender truly owns the email address provided (${parsed.data.email}). 
Do not share sensitive information unless you are certain of their identity.
    `.trim();

    const mailOptions = {
      from: process.env.EMAIL_USER, // Sent via your own authenticated account
      to: process.env.EMAIL_USER,   // Sent TO yourself (cannot be hijacked to spam others)
      replyTo: parsed.data.email, 
      subject: `New Portfolio Message from ${parsed.data.name}`,
      text: mailText,
    };

    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error("Failed to send email:", error);
    return { error: "Failed to send message. Please try again later." };
  }
}