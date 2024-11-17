import { db } from "@/db";
import { and, eq } from "drizzle-orm";
import {
  Quizz as QuizzTable,
  StudenAnswers,
  Question as QuestionTable,
} from "@/db/schema";
import { StudenAnswersDto } from "@/types";

class StudenQuizzesService {
  async joinQuizz(code: string, studentId: string) {
    const quizz = await db.query.Quizz.findFirst({
      where: eq(QuizzTable.code, code),
    });

    if (!quizz) {
      return { error: "Quizz not found with this code" };
    }

    // Quizz owner can't join
    if (quizz.userId === studentId) {
      return { error: "You can't join your own quizz" };
    }

    // check if student already joined this quizz
    const studentToQuizz = await db.query.StudenAnswers.findFirst({
      where: eq(StudenAnswers.quizzId, "studentId"),
    });

    if (studentToQuizz) {
      return { error: "You already joined this quizz" };
    }

    // get first question
    const firstQuestion = await db.query.Question.findFirst({
      where: and(
        eq(QuestionTable.quizId, quizz.id),
        eq(QuestionTable.index, 1)
      ),
    });

    // add student to quizz
    await db.insert(StudenAnswers).values({
      studentId: "studentId",
      quizzId: quizz.id,
      questionId: firstQuestion?.id as string,
    });

    return { question: firstQuestion, studentId };
  }

  async moveNextQuestion(nextQuestionDto: StudenAnswersDto) {
    const nextQuestion = await db.query.Question.findFirst({
      where: and(
        eq(QuestionTable.quizId, nextQuestionDto.quizzId),
        eq(QuestionTable.index, (nextQuestionDto.index as number) + 1)
      ),
    });

    if (!nextQuestion) {
      return { warning: "This is the last question" };
    }

    await db.insert(StudenAnswers).values({
      studentId: nextQuestionDto.studentId as string,
      questionId: nextQuestion.id,
      quizzId: nextQuestionDto.quizzId,
    });

    return { question: nextQuestion };
  }

  async setPoints(nextQuestionDto: StudenAnswersDto) {
    await db
      .update(StudenAnswers)
      .set({
        nbPoints: nextQuestionDto.nbPoints,
      })
      .where(
        and(
          eq(StudenAnswers.questionId, nextQuestionDto.questionId),
          eq(StudenAnswers.quizzId, nextQuestionDto.quizzId),
          eq(StudenAnswers.studentId, nextQuestionDto.studentId)
        )
      );
  }
}

const instance = new StudenQuizzesService();

export default instance;
