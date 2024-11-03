CREATE TABLE IF NOT EXISTS "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp DEFAULT '2024-11-03 09:54:28.919',
	"updated_at" timestamp DEFAULT '2024-11-03 09:54:28.919',
	"deleted_at" timestamp DEFAULT '2024-11-03 09:54:28.919',
	"name" text NOT NULL,
	"email" text NOT NULL,
	"password" text NOT NULL,
	"full_name" text NOT NULL,
	"username" text NOT NULL,
	CONSTRAINT "users_username_unique" UNIQUE("username")
);
