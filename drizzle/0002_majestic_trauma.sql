ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT '2024-11-03 10:05:45.977';--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "updated_at" SET DEFAULT '2024-11-03 10:05:45.977';--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "deleted_at" SET DEFAULT '2024-11-03 10:05:45.977';--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "first_name" text NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "last_name" text NOT NULL;--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN IF EXISTS "full_name";