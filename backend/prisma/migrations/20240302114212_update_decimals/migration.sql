/*
  Warnings:

  - You are about to alter the column `value` on the `services` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(10,2)`.
  - Made the column `first_name` on table `data` required. This step will fail if there are existing NULL values in that column.
  - Made the column `email` on table `data` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "core"."services" ALTER COLUMN "value" SET DATA TYPE DECIMAL(10,2);

-- AlterTable
ALTER TABLE "customer"."data" ALTER COLUMN "first_name" SET NOT NULL,
ALTER COLUMN "email" SET NOT NULL;
