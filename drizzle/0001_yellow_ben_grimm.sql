ALTER TABLE "questions" ALTER COLUMN "created_at" SET DEFAULT '2024-11-17 11:51:25.594';--> statement-breakpoint
ALTER TABLE "questions" ALTER COLUMN "updated_at" SET DEFAULT '2024-11-17 11:51:25.594';--> statement-breakpoint
ALTER TABLE "questions" ALTER COLUMN "deleted_at" SET DEFAULT '2024-11-17 11:51:25.594';--> statement-breakpoint
ALTER TABLE "questions" ALTER COLUMN "time_limit" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "questions" ALTER COLUMN "time_limit" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "quizzes" ALTER COLUMN "created_at" SET DEFAULT '2024-11-17 11:51:25.594';--> statement-breakpoint
ALTER TABLE "quizzes" ALTER COLUMN "updated_at" SET DEFAULT '2024-11-17 11:51:25.594';--> statement-breakpoint
ALTER TABLE "quizzes" ALTER COLUMN "deleted_at" SET DEFAULT '2024-11-17 11:51:25.594';--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT '2024-11-17 11:51:25.594';--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "updated_at" SET DEFAULT '2024-11-17 11:51:25.594';--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "deleted_at" SET DEFAULT '2024-11-17 11:51:25.594';