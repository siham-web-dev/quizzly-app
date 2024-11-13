CREATE TABLE IF NOT EXISTS "quizzes" (
	"id" text PRIMARY KEY NOT NULL,
	"created_at" timestamp DEFAULT '2024-11-13 18:00:22.569',
	"updated_at" timestamp DEFAULT '2024-11-13 18:00:22.569',
	"deleted_at" timestamp DEFAULT '2024-11-13 18:00:22.569',
	"title" text NOT NULL,
	"description" text NOT NULL,
	"code" text NOT NULL,
	"user_id" text NOT NULL,
	CONSTRAINT "quizzes_code_unique" UNIQUE("code")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" text PRIMARY KEY NOT NULL,
	"created_at" timestamp DEFAULT '2024-11-13 18:00:22.569',
	"updated_at" timestamp DEFAULT '2024-11-13 18:00:22.569',
	"deleted_at" timestamp DEFAULT '2024-11-13 18:00:22.569',
	"email" text NOT NULL,
	"first_name" text NOT NULL,
	"last_name" text NOT NULL
);
