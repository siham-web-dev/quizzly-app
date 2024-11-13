import { z } from "zod";

export type User = {
  id?: string;
  name: string;
  email: string;
  firstName: string;
  lastName: string;
};

export const QuizzFormValidation = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  code: z
    .string()
    .min(1, { message: "Code is required" })
    .min(6, { message: "Code must be at least 6 characters" })
    .max(6, { message: "Code must be at most 6 characters" }),
});

export type Quizz = z.infer<typeof QuizzFormValidation>;
