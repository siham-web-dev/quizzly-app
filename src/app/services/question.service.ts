import { Question } from "@/types";
import { Question as QuestionTable } from "@/db/schema";
import { db } from "@/db";
import { and, eq } from "drizzle-orm";

class QuestionService {
  public async createQuestion(questionDto: Question) {
    const question = await db
      .insert(QuestionTable)
      .values({
        ...questionDto,
        quizId: questionDto.quizId as string,
        timeLimit: questionDto.timeLimit.toString(),
        id: Math.random().toString(36).substring(2, 15),
      })
      .returning();

    return question;
  }

  public async getQuestion(quizzId: string, index: number) {
    const question = await db.query.Question.findFirst({
      where: and(
        eq(QuestionTable.index, index),
        eq(QuestionTable.quizId, quizzId)
      ),
    });

    return question;
  }
}

export default new QuestionService();
