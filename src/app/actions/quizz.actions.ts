"use server";
import { Quizz, QuizzFormValidation } from "@/types";
import { auth } from "@clerk/nextjs/server";
import quizService from "../services/quiz.service";

export const addQuizz = async (quizzDto: Quizz) => {
  const { userId } = await auth();
  try {
    const { success, data } = QuizzFormValidation.safeParse(quizzDto);

    if (!success) {
      return { error: data };
    }

    const quizz = await quizService.createQuizz(quizzDto, userId!);
    if (quizz?.error) {
      return { error: quizz.error };
    }

    return { message: "you have successfully created a quizz !!", quizz };
  } catch (error) {
    console.log(error);

    return { error: "something went wrong" };
  }
};

export const getOwnedQuizzes = async () => {
  const { userId } = await auth();
  try {
    const quizzes = await quizService.getQuizzByUserId(userId!);

    return { quizzes };
  } catch (error) {
    console.log(error);

    return { error: "something went wrong" };
  }
};

export const deleteQuizz = async (quizzId: string) => {
  try {
    await quizService.deleteQuizz(quizzId);

    return { message: "you have successfully deleted a quizz !!" };
  } catch (error) {
    console.log(error);

    return { error: "something went wrong" };
  }
};
