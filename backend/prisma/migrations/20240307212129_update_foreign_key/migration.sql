/*
  Warnings:

  - Made the column `service_id` on table `forms` required. This step will fail if there are existing NULL values in that column.
  - Made the column `question_id` on table `forms` required. This step will fail if there are existing NULL values in that column.
  - Made the column `tp_question_id` on table `questions` required. This step will fail if there are existing NULL values in that column.
  - Made the column `customer_id` on table `form` required. This step will fail if there are existing NULL values in that column.
  - Made the column `service_id` on table `form` required. This step will fail if there are existing NULL values in that column.
  - Made the column `customer_id` on table `service` required. This step will fail if there are existing NULL values in that column.
  - Made the column `service_id` on table `service` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "core"."forms" ALTER COLUMN "service_id" SET NOT NULL,
ALTER COLUMN "question_id" SET NOT NULL;

-- AlterTable
ALTER TABLE "core"."questions" ALTER COLUMN "tp_question_id" SET NOT NULL;

-- AlterTable
ALTER TABLE "customer"."form" ALTER COLUMN "customer_id" SET NOT NULL,
ALTER COLUMN "service_id" SET NOT NULL;

-- AlterTable
ALTER TABLE "customer"."service" ALTER COLUMN "customer_id" SET NOT NULL,
ALTER COLUMN "service_id" SET NOT NULL;
