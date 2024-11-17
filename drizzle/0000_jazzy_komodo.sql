CREATE TABLE IF NOT EXISTS "questions" (
	"id" text PRIMARY KEY NOT NULL,
	"created_at" timestamp DEFAULT '2024-11-17 11:50:25.371',
	"updated_at" timestamp DEFAULT '2024-11-17 11:50:25.371',
	"deleted_at" timestamp DEFAULT '2024-11-17 11:50:25.371',
	"question" text NOT NULL,
	"choice1" text NOT NULL,
	"choice2" text NOT NULL,
	"choice3" text NOT NULL,
	"answer" integer NOT NULL,
	"nb_points" integer NOT NULL,
	"time_limit" integer DEFAULT 0 NOT NULL,
	"quiz_id" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "quizzes" (
	"id" text PRIMARY KEY NOT NULL,
	"created_at" timestamp DEFAULT '2024-11-17 11:50:25.371',
	"updated_at" timestamp DEFAULT '2024-11-17 11:50:25.371',
	"deleted_at" timestamp DEFAULT '2024-11-17 11:50:25.371',
	"title" text NOT NULL,
	"description" text NOT NULL,
	"code" text NOT NULL,
	"user_id" text NOT NULL,
	CONSTRAINT "quizzes_code_unique" UNIQUE("code")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" text PRIMARY KEY NOT NULL,
	"created_at" timestamp DEFAULT '2024-11-17 11:50:25.371',
	"updated_at" timestamp DEFAULT '2024-11-17 11:50:25.371',
	"deleted_at" timestamp DEFAULT '2024-11-17 11:50:25.371',
	"email" text NOT NULL,
	"first_name" text NOT NULL,
	"last_name" text NOT NULL
);
