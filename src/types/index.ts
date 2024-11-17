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

export const QuestionFormValidation = z.object({
  description: z.string().min(10, { message: "Description is required" }),
  choice1: z.string().min(4, {
    message: "Choice 1 is required and must be at least 4 characters",
  }),
  choice2: z.string().min(4, {
    message: "Choice 2 is required  and must be at least 4 characters",
  }),
  choice3: z.string().min(4, {
    message: "Choice 3 is required  and must be at least 4 characters",
  }),
  answer: z.preprocess(
    (value) => Number(value),
    z.number().refine((value: number) => value >= 1 && value <= 3, {
      message: "Answer must be between 1 and 3",
    })
  ),
  nbPoints: z.preprocess(
    (value) => Number(value),
    z
      .number()
      .gte(1, { message: "Number of points must be at least 1" })
      .lte(10, { message: "Number of points must be at most 10" })
  ),
  timeLimit: z.preprocess(
    (value) => Number(value),
    z.number().lte(60, { message: "Time limit must be at most 60 seconds" })
  ),
});

export type Quizz = {
  id?: string;
} & z.infer<typeof QuizzFormValidation>;

export type Question = {
  quizId: string;
  id?: string;
} & z.infer<typeof QuestionFormValidation>;
