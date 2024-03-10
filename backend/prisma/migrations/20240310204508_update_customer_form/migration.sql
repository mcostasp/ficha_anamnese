/*
  Warnings:

  - Added the required column `question_id` to the `form` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "customer"."form" ADD COLUMN     "question_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "customer"."form" ADD CONSTRAINT "form_question_id_fkey" FOREIGN KEY ("question_id") REFERENCES "core"."questions"("id") ON DELETE SET DEFAULT ON UPDATE SET DEFAULT;
