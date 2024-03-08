/*
  Warnings:

  - Made the column `question` on table `questions` required. This step will fail if there are existing NULL values in that column.
  - Made the column `service_name` on table `services` required. This step will fail if there are existing NULL values in that column.
  - Made the column `type` on table `type_questions` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "core"."questions" ALTER COLUMN "question" SET NOT NULL;

-- AlterTable
ALTER TABLE "core"."services" ALTER COLUMN "service_name" SET NOT NULL;

-- AlterTable
ALTER TABLE "core"."type_questions" ALTER COLUMN "type" SET NOT NULL;
