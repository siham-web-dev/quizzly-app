import { db } from "@/db";
import { User as UserTable } from "@/db/schema";
import { User } from "@/types";
import { eq } from "drizzle-orm";

class UserService {
  async createUser(user: User) {
    try {
      const id =
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15);
      await db.insert(UserTable).values({
        id,
        ...user,
      });

      return { message: "SUCCESS" };
    } catch (error) {
      console.error(error);
      return { error: "INTERNAL_SERVER_ERROR" };
    }
  }

  async getUserById(id: string) {
    try {
      const user = await db.query.User.findFirst({
        where: eq(UserTable.id, id),
      });
      if (!user) return { error: "USER_NOT_FOUND" };

      return user;
    } catch (error) {
      console.error(error);

      return null;
    }
  }

  async updateUser(id: string, user: User) {
    try {
      await db
        .update(UserTable)
        .set({ ...user })
        .where(eq(UserTable.id, id));

      return { message: "SUCCESS" };
    } catch (error) {
      console.error(error);

      return { error: "INTERNAL_SERVER_ERROR" };
    }
  }

  async deleteUser(id: string) {
    try {
      const user = await db.query.User.findFirst({
        where: eq(UserTable.id, id),
      });
      if (!user) return { error: "USER_NOT_FOUND" };

      await db.delete(UserTable).where(eq(UserTable.id, id));

      return { message: "SUCCESS" };
    } catch (error) {
      console.error(error);
      return { error: "INTERNAL_SERVER_ERROR" };
    }
  }
}

export default new UserService();
