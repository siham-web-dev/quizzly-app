"use server";
import { Question, QuestionFormValidation } from "@/types";
import questionService from "../services/question.service";

export const addQuestion = async (questionDto: Question) => {
  try {
    const { success, data } = QuestionFormValidation.safeParse(questionDto);

    if (!success) {
      return { error: data };
    }

    const question = await questionService.createQuestion(questionDto);

    return {
      message: "you have successfully created question for a quizz !!",
      question,
    };
  } catch (error) {
    console.log(error);

    return { error: "something went wrong" };
  }
};

export const getQuestion = async (quizzId: string, index: number) => {
  try {
    const question = await questionService.getQuestion(quizzId, index);

    return { question };
  } catch (error) {
    console.log(error);

    return { error: "something went wrong" };
  }
};
