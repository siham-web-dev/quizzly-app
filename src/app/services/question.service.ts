import { Question } from "@/types";
import { Question as QuestionTable } from "@/db/schema";
import { db } from "@/db";

class QuestionService {
  public async createQuestion(questionDto: Question) {
    const question = await db
      .insert(QuestionTable)
      .values({
        ...questionDto,
        timeLimit: questionDto.timeLimit.toString(),
        id: Math.random().toString(36).substring(2, 15),
      })
      .returning();

    return question;
  }
}

export default new QuestionService();
