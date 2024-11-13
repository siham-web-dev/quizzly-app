import { db } from "@/db";
import { Quizz } from "@/types";
import { Quizz as QuizzTable } from "@/db/schema";
import { eq } from "drizzle-orm";

class QuizzService {
  async createQuizz(
    quizzDto: Quizz,
    userId: string
  ): Promise<void | { error: string }> {
    const data = await this.checkCode(quizzDto.code);
    if (data?.error) return { error: data.error };

    const id = Math.random().toString(36).substring(2, 15);
    await db
      .insert(QuizzTable)
      .values({ id, ...quizzDto, userId })
      .returning();
  }

  async checkCode(code: string) {
    const quizz = await db.query.Quizz.findFirst({
      where: eq(QuizzTable.code, code),
    });

    if (quizz) return { error: "code already exists" };

    return;
  }

  async getQuizzByUserId(userId: string) {
    const quizz = await db.query.Quizz.findMany({
      where: eq(QuizzTable.userId, userId),
    });

    return quizz;
  }
}

export default new QuizzService();
