"use server";
import studentQuizzesService from "@/app/services/studentQuizzes.service";
import { StudenAnswers, StudenAnswersDto } from "@/types";
import { auth } from "@clerk/nextjs/server";

export const joinQuizz = async (code: string) => {
  try {
    const { userId } = await auth();
    const { error, question } = await studentQuizzesService.joinQuizz(
      code,
      userId!
    );

    if (error) return { error };

    return { message: "you have successfully joined a quizz !!", question };
  } catch (error) {
    console.log(error);

    return { error: "something went wrong" };
  }
};

export const setPoints = async (data: StudenAnswers) => {
  try {
    const { userId } = await auth();

    await studentQuizzesService.setPoints({ ...data, studentId: userId! });
  } catch (error) {
    console.log(error);

    return { error: "something went wrong" };
  }
};

export const moveNextQuestion = async (data: StudenAnswersDto) => {
  try {
    const { userId } = await auth();

    const { question, warning } = await studentQuizzesService.moveNextQuestion({
      ...data,
      studentId: userId as string,
    });

    if (warning) return { error: warning };

    return { question };
  } catch (error) {
    console.log(error);

    return { error: "something went wrong" };
  }
};
