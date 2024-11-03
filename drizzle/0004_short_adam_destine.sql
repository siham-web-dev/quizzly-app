ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT '2024-11-03 10:16:54.681';--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "updated_at" SET DEFAULT '2024-11-03 10:16:54.681';--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "deleted_at" SET DEFAULT '2024-11-03 10:16:54.681';--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN IF EXISTS "password";