-- DropForeignKey
ALTER TABLE "core"."forms" DROP CONSTRAINT "forms_question_id_fkey";

-- DropForeignKey
ALTER TABLE "core"."forms" DROP CONSTRAINT "forms_service_id_fkey";

-- DropForeignKey
ALTER TABLE "core"."questions" DROP CONSTRAINT "questions_tp_question_id_fkey";

-- DropForeignKey
ALTER TABLE "customer"."form" DROP CONSTRAINT "form_customer_id_fkey";

-- DropForeignKey
ALTER TABLE "customer"."form" DROP CONSTRAINT "form_service_id_fkey";

-- DropForeignKey
ALTER TABLE "customer"."service" DROP CONSTRAINT "service_customer_id_fkey";

-- DropForeignKey
ALTER TABLE "customer"."service" DROP CONSTRAINT "service_service_id_fkey";

-- AddForeignKey
ALTER TABLE "customer"."form" ADD CONSTRAINT "form_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customer"."data"("id") ON DELETE SET DEFAULT ON UPDATE SET DEFAULT;

-- AddForeignKey
ALTER TABLE "customer"."form" ADD CONSTRAINT "form_service_id_fkey" FOREIGN KEY ("service_id") REFERENCES "customer"."service"("id") ON DELETE SET DEFAULT ON UPDATE SET DEFAULT;

-- AddForeignKey
ALTER TABLE "customer"."service" ADD CONSTRAINT "service_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customer"."data"("id") ON DELETE SET DEFAULT ON UPDATE SET DEFAULT;

-- AddForeignKey
ALTER TABLE "customer"."service" ADD CONSTRAINT "service_service_id_fkey" FOREIGN KEY ("service_id") REFERENCES "core"."services"("id") ON DELETE SET DEFAULT ON UPDATE SET DEFAULT;

-- AddForeignKey
ALTER TABLE "core"."forms" ADD CONSTRAINT "forms_service_id_fkey" FOREIGN KEY ("service_id") REFERENCES "core"."services"("id") ON DELETE SET DEFAULT ON UPDATE SET DEFAULT;

-- AddForeignKey
ALTER TABLE "core"."forms" ADD CONSTRAINT "forms_question_id_fkey" FOREIGN KEY ("question_id") REFERENCES "core"."questions"("id") ON DELETE SET DEFAULT ON UPDATE SET DEFAULT;

-- AddForeignKey
ALTER TABLE "core"."questions" ADD CONSTRAINT "questions_tp_question_id_fkey" FOREIGN KEY ("tp_question_id") REFERENCES "core"."type_questions"("id") ON DELETE SET DEFAULT ON UPDATE SET DEFAULT;
