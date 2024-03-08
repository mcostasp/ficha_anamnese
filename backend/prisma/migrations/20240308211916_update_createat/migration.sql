/*
  Warnings:

  - Made the column `created_at` on table `forms` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `questions` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `services` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `type_questions` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `data` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `form` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `service` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "core"."forms" ALTER COLUMN "created_at" SET NOT NULL;

-- AlterTable
ALTER TABLE "core"."questions" ALTER COLUMN "created_at" SET NOT NULL;

-- AlterTable
ALTER TABLE "core"."services" ALTER COLUMN "created_at" SET NOT NULL;

-- AlterTable
ALTER TABLE "core"."type_questions" ALTER COLUMN "created_at" SET NOT NULL;

-- AlterTable
ALTER TABLE "customer"."data" ALTER COLUMN "created_at" SET NOT NULL;

-- AlterTable
ALTER TABLE "customer"."form" ALTER COLUMN "created_at" SET NOT NULL;

-- AlterTable
ALTER TABLE "customer"."service" ALTER COLUMN "created_at" SET NOT NULL;
