-- AlterTable
ALTER TABLE "core"."forms" ALTER COLUMN "created_at" DROP NOT NULL;

-- AlterTable
ALTER TABLE "core"."questions" ALTER COLUMN "question" DROP NOT NULL,
ALTER COLUMN "created_at" DROP NOT NULL;

-- AlterTable
ALTER TABLE "core"."services" ALTER COLUMN "service_name" DROP NOT NULL,
ALTER COLUMN "value" DROP NOT NULL,
ALTER COLUMN "created_at" DROP NOT NULL;

-- AlterTable
ALTER TABLE "core"."type_questions" ALTER COLUMN "type" DROP NOT NULL,
ALTER COLUMN "created_at" DROP NOT NULL;

-- AlterTable
ALTER TABLE "customer"."data" ALTER COLUMN "first_name" DROP NOT NULL,
ALTER COLUMN "last_name" DROP NOT NULL,
ALTER COLUMN "age" DROP NOT NULL,
ALTER COLUMN "birthdate" DROP NOT NULL,
ALTER COLUMN "marital_status" DROP NOT NULL,
ALTER COLUMN "phone" DROP NOT NULL,
ALTER COLUMN "mobile" DROP NOT NULL,
ALTER COLUMN "email" DROP NOT NULL,
ALTER COLUMN "facebook" DROP NOT NULL,
ALTER COLUMN "instagram" DROP NOT NULL,
ALTER COLUMN "profession" DROP NOT NULL,
ALTER COLUMN "address_line1" DROP NOT NULL,
ALTER COLUMN "address_line2" DROP NOT NULL,
ALTER COLUMN "state" DROP NOT NULL,
ALTER COLUMN "province" DROP NOT NULL,
ALTER COLUMN "zipcode" DROP NOT NULL,
ALTER COLUMN "country" DROP NOT NULL,
ALTER COLUMN "created_at" DROP NOT NULL;

-- AlterTable
ALTER TABLE "customer"."form" ALTER COLUMN "yes_no" DROP NOT NULL,
ALTER COLUMN "created_at" DROP NOT NULL;

-- AlterTable
ALTER TABLE "customer"."service" ALTER COLUMN "created_at" DROP NOT NULL;
