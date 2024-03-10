import request  from "supertest";
import app from "../../app";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

describe("Ficha Anamnese API - Core Forms", () => {

    it("should create a new form", async () => {
        const customer = await prisma.data.findFirst({});
        const service = await prisma.service.findFirst({});
        const question = await prisma.questions.findFirst({});
        const res = await request(app).post("/api/form/").send({
            yes_no: true,
            long_answer: 'Problemas de pele por conta desse produto',
            customer_id: customer?.id,
            service_id: service?.id,
            question_id: question?.id,
        });

        expect(res.status).toEqual(200);
        expect(res.body).toHaveProperty("id");

    });

    it("should get form by id", async () => {
        const formId = await prisma.form.findFirst({});
        const res = await request(app).get(`/api/form/${formId?.id}`);

        expect(res.status).toEqual(200);
        expect(res.body).toHaveProperty("id");
    });

    it("should get all forms", async () => {
        const res = await request(app).get("/api/form/");

        expect(res.status).toEqual(200);
        expect(Array.isArray(res.body)).toBe(true);
    });

    it("should update an existing form", async () => {
        const form = await prisma.form.findFirst({});
        const updateForm = { long_answer: 'Alergia a medicação' };
        const res = await request(app).put(`/api/form/${form?.id}`)
                                      .send(updateForm);
        expect(res.status).toEqual(200);
        expect(res.body.long_answer).toEqual("Alergia a medicação");
    });

    it("should be delete form", async () => {
        const formId = await prisma.form.findFirst({});
        const res = await request(app).delete(`/api/form/${formId?.id}`);

        expect(res.statusCode).toEqual(204);

        const delForm = await prisma.form.findUnique({
            where: { id: formId?.id },
        });

        expect(delForm).toBeNull();       

    });
});