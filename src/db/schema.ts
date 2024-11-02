import {
  decimal,
  index,
  integer,
  pgTable,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";

const DefaultSchema = {
  id: uuid("id").primaryKey().defaultRandom(),
  createdAt: timestamp("created_at").default(new Date()),
  updatedAt: timestamp("updated_at").default(new Date()),
  deletedAt: timestamp("deleted_at").default(new Date()),
};

export const quizz = pgTable(
  "quizzes",
  {
    ...DefaultSchema,
    name: text("name").notNull(),
    description: text("description").notNull(),
    code: text("code").notNull(),
    userId: text("clerkUserId").notNull(),
  },
  (table) => ({
    clerkUserIdIndex: index("clerkUserIdIndex").on(table.userId),
  })
);

export const question = pgTable("questions", {
  ...DefaultSchema,
  quizId: uuid("quiz_id").notNull(),
  question: text("question").notNull(),
  choice1: text("choices").notNull(),
  choice2: text("choices").notNull(),
  choice3: text("choices").notNull(),
  answer: integer("answer").notNull(),
  timeLimit: text("time_limit").notNull(),
  nbPoints: decimal("nb_points").notNull(),
});
