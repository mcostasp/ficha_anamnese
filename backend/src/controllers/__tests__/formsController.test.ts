import request  from "supertest";
import app from "../../app";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

describe("Ficha Anamnese API - Core Forms", () => {
/*     beforeEach( async () => {
        await request(app).delete("/api/forms/");
        const resTpQuest = await prisma.type_questions.create({
            data: { type: "Type Test." },
        })
        tpquestId = resTpQuest.id;
        const resQuestion = await prisma.questions.create({
            data: {
                question: "Question Test ?",
                tp_question_id: tpquestId,
            }
        });
        questionId = resQuestion.id;
        const resService = await prisma.services.create({
            data: {
                service_name: "Service Test"
            }
        });
        serviceId = resService.id;
    });

    afterEach( async () => {
        //await prisma.services.delete({ where: { id: serviceId } });
        const rs = await request(app).delete(`/api/services/${serviceId}`);
        await prisma.questions.delete({ where: { id: questionId } });
        await prisma.type_questions.delete({ where: { id: tpquestId } });
    }); */

    it("should create a new form", async () => {
        const serviceId = await prisma.services.findFirst({});
        const questionId = await prisma.questions.findFirst({});
        const res = await request(app).post("/api/forms/").send({
            service_id: serviceId?.id,
            question_id: questionId?.id,
        });

        expect(res.status).toEqual(200);
        expect(res.body).toHaveProperty("id");

    });

    it("should get form by id", async () => {
        const formId = await prisma.forms.findFirst({});
        const res = await request(app).get(`/api/forms/${formId?.id}`);

        expect(res.status).toEqual(200);
        expect(res.body).toHaveProperty("id");
    });

    it("should get all forms", async () => {
        const res = await request(app).get("/api/forms/");

        expect(res.status).toEqual(200);
        expect(Array.isArray(res.body)).toBe(true);
    });

    it("should update an existing form", async () => {});

    it("should be delete form", async () => {
        const formId = await prisma.forms.findFirst({});
        const res = await request(app).delete(`/api/forms/${formId?.id}`);

        expect(res.statusCode).toEqual(204);

        const delForm = await prisma.forms.findUnique({
            where: { id: formId?.id },
        });

        expect(delForm).toBeNull();       

    });
});