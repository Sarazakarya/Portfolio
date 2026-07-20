import z from "zod";

export const contactSchema = z.object({
  email: z.string().min(1, "Email is required").email("Enter a valid email"),
  subject: z.string().min(1, "Subject is required"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message is too long"),
});