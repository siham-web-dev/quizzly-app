import { relations } from "drizzle-orm";
import {
  integer,
  pgTable,
  primaryKey,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

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

export const Question = pgTable("questions", {
  ...DefaultSchema,
  index: integer("index").default(1).notNull(),
  description: text("question").notNull(),
  choice1: text("choice1").notNull(),
  choice2: text("choice2").notNull(),
  choice3: text("choice3").notNull(),
  answer: integer("answer").notNull(),
  nbPoints: integer("nb_points").notNull(),
  timeLimit: text("time_limit").notNull(),
  quizId: text("quiz_id").notNull(),
});

export const StudenAnswers = pgTable(
  "student_to_question",
  {
    studentId: text("student_id").notNull(),
    questionId: text("question_id").notNull(),
    quizzId: text("quizz_id").notNull(),
    nbPoints: integer("nb_points").notNull().default(0),
  },
  (t) => ({
    studentToQuestionCompositeKey: primaryKey({
      columns: [t.studentId, t.questionId, t.quizzId],
    }),
  })
);

export const QuizzRelation = relations(Quizz, ({ one, many }) => ({
  user: one(User, {
    fields: [Quizz.userId],
    references: [User.id],
  }),
  questions: many(Question),
  studentAnswers: many(StudenAnswers),
}));

export const userRelation = relations(User, ({ many }) => ({
  quizzes: many(Quizz),
  studentAnswers: many(StudenAnswers),
}));

export const questionRelation = relations(Question, ({ one, many }) => ({
  quizz: one(Quizz, {
    fields: [Question.quizId],
    references: [Quizz.id],
  }),
  studentAnswers: many(StudenAnswers),
}));

export const studentToQuestionRelation = relations(
  StudenAnswers,
  ({ one }) => ({
    student: one(User, {
      fields: [StudenAnswers.studentId],
      references: [User.id],
    }),
    question: one(Question, {
      fields: [StudenAnswers.questionId],
      references: [Question.id],
    }),
    quizz: one(Quizz, {
      fields: [StudenAnswers.quizzId],
      references: [Quizz.id],
    }),
  })
);
