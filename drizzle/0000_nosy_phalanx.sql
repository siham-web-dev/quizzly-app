CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"created_at" timestamp DEFAULT '2024-11-03 13:27:16.635',
	"updated_at" timestamp DEFAULT '2024-11-03 13:27:16.635',
	"deleted_at" timestamp DEFAULT '2024-11-03 13:27:16.635',
	"email" text NOT NULL,
	"first_name" text NOT NULL,
	"last_name" text NOT NULL,
	"username" text NOT NULL,
	CONSTRAINT "users_username_unique" UNIQUE("username")
);
