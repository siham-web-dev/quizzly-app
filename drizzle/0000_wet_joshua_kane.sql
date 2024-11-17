CREATE TABLE IF NOT EXISTS "questions" (
	"id" text PRIMARY KEY NOT NULL,
	"created_at" timestamp DEFAULT '2024-11-17 16:52:36.718',
	"updated_at" timestamp DEFAULT '2024-11-17 16:52:36.718',
	"deleted_at" timestamp DEFAULT '2024-11-17 16:52:36.718',
	"question" text NOT NULL,
	"choice1" text NOT NULL,
	"choice2" text NOT NULL,
	"choice3" text NOT NULL,
	"answer" integer NOT NULL,
	"nb_points" integer NOT NULL,
	"time_limit" text NOT NULL,
	"quiz_id" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "quizzes" (
	"id" text PRIMARY KEY NOT NULL,
	"created_at" timestamp DEFAULT '2024-11-17 16:52:36.718',
	"updated_at" timestamp DEFAULT '2024-11-17 16:52:36.718',
	"deleted_at" timestamp DEFAULT '2024-11-17 16:52:36.718',
	"title" text NOT NULL,
	"description" text NOT NULL,
	"code" text NOT NULL,
	"user_id" text NOT NULL,
	CONSTRAINT "quizzes_code_unique" UNIQUE("code")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "student_to_question" (
	"student_id" text NOT NULL,
	"question_id" text NOT NULL,
	"quizz_id" text NOT NULL,
	"nb_points" integer DEFAULT 0 NOT NULL,
	CONSTRAINT "student_to_question_student_id_question_id_quizz_id_pk" PRIMARY KEY("student_id","question_id","quizz_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" text PRIMARY KEY NOT NULL,
	"created_at" timestamp DEFAULT '2024-11-17 16:52:36.718',
	"updated_at" timestamp DEFAULT '2024-11-17 16:52:36.718',
	"deleted_at" timestamp DEFAULT '2024-11-17 16:52:36.718',
	"email" text NOT NULL,
	"first_name" text NOT NULL,
	"last_name" text NOT NULL
);
