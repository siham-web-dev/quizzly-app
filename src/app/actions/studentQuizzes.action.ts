"use server";
import studentQuizzesService from "@/app/services/studentQuizzes.service";
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
