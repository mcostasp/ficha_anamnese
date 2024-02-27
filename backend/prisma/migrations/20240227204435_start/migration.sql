-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "core";

-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "customer";

-- CreateTable
CREATE TABLE "customer"."data" (
    "id" SERIAL NOT NULL,
    "first_name" VARCHAR(255) NOT NULL,
    "last_name" VARCHAR(255) NOT NULL,
    "age" INTEGER NOT NULL,
    "birthdate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "marital_status" VARCHAR(50) NOT NULL,
    "phone" VARCHAR(30) NOT NULL,
    "mobile" VARCHAR(30) NOT NULL,
    "email" VARCHAR(150) NOT NULL,
    "facebook" VARCHAR(50) NOT NULL,
    "instagram" VARCHAR(50) NOT NULL,
    "profession" VARCHAR(150) NOT NULL,
    "address_line1" VARCHAR(255) NOT NULL,
    "address_line2" VARCHAR(255) NOT NULL,
    "state" VARCHAR(50) NOT NULL,
    "province" VARCHAR(50) NOT NULL,
    "zipcode" VARCHAR(10) NOT NULL,
    "country" VARCHAR(50) NOT NULL,
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "data_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "customer"."form" (
    "id" SERIAL NOT NULL,
    "yes_no" BOOLEAN NOT NULL DEFAULT false,
    "long_answer" VARCHAR(255),
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "customer_id" INTEGER,
    "service_id" INTEGER,

    CONSTRAINT "form_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "customer"."service" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "customer_id" INTEGER,
    "service_id" INTEGER,

    CONSTRAINT "service_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "core"."forms" (
    "id" SERIAL NOT NULL,
    "service_id" INTEGER,
    "question_id" INTEGER,
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "forms_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "core"."questions" (
    "id" SERIAL NOT NULL,
    "question" VARCHAR(255) NOT NULL,
    "tp_question_id" INTEGER,
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "questions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "core"."services" (
    "id" SERIAL NOT NULL,
    "service_name" VARCHAR(150) NOT NULL,
    "value" DECIMAL(65,30) NOT NULL,
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "services_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "core"."type_questions" (
    "id" SERIAL NOT NULL,
    "type" VARCHAR(50) NOT NULL,
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "type_questions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "data_email_key" ON "customer"."data"("email");

-- AddForeignKey
ALTER TABLE "customer"."form" ADD CONSTRAINT "form_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customer"."data"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customer"."form" ADD CONSTRAINT "form_service_id_fkey" FOREIGN KEY ("service_id") REFERENCES "customer"."service"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customer"."service" ADD CONSTRAINT "service_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customer"."data"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customer"."service" ADD CONSTRAINT "service_service_id_fkey" FOREIGN KEY ("service_id") REFERENCES "core"."services"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "core"."forms" ADD CONSTRAINT "forms_service_id_fkey" FOREIGN KEY ("service_id") REFERENCES "core"."services"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "core"."forms" ADD CONSTRAINT "forms_question_id_fkey" FOREIGN KEY ("question_id") REFERENCES "core"."questions"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "core"."questions" ADD CONSTRAINT "questions_tp_question_id_fkey" FOREIGN KEY ("tp_question_id") REFERENCES "core"."type_questions"("id") ON DELETE SET NULL ON UPDATE CASCADE;
