import { relations } from "drizzle-orm";
import { pgTable, text, timestamp } from "drizzle-orm/pg-core";

const DefaultSchema = {
  id: text("id").notNull().primaryKey(),
  createdAt: timestamp("created_at").default(new Date()),
  updatedAt: timestamp("updated_at").default(new Date()),
  deletedAt: timestamp("deleted_at").default(new Date()),
};

export const User = pgTable("users", {
  ...DefaultSchema,
  email: text("email").notNull(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
});

export const Quizz = pgTable("quizzes", {
  ...DefaultSchema,
  title: text("title").notNull(),
  description: text("description").notNull(),
  code: text("code").notNull().unique(),
  userId: text("user_id").notNull(),
});

export const QuizzRelation = relations(Quizz, ({ one }) => ({
  user: one(User, {
    fields: [Quizz.userId],
    references: [User.id],
  }),
}));

export const userRelation = relations(User, ({ many }) => ({
  quizzes: many(Quizz),
}));
