import request from "supertest";
import app from "../../app";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

describe("Ficha Anamnese API - Core Type Questions", () => {
    let tpquestionId: number;

    it("should delete all fields", async () => {
        const res = await request(app).delete("/api/tpquestions/");
        expect(res.statusCode).toEqual(204);
    });

    it("should create a new type question", async () => {
        const res = await request(app).post("/api/tpquestions/")
                                      .send({
                                        type: "Yes/No"
                                      });
        
        expect(res.status).toEqual(200);
        expect(res.body).toHaveProperty("id");
        tpquestionId = res.body.id;                                      
    });

    it("should get type question by id", async() => {
        const res = await request(app).get(`/api/tpquestions/${tpquestionId}`);

        expect(res.status).toEqual(200);
        expect(res.body).toHaveProperty("type");
    });

    it("should get all type question", async() => {
        const res = await request(app).get("/api/tpquestions/");

        expect(res.status).toEqual(200);
        expect(Array.isArray(res.body)).toBe(true);
    });

    it("should update an existing type question", async() => {
        const newTpQuestion = await prisma.type_questions.create({
            data: { type: "Long Question" },
        });

        const updateTpQuestion = { type: "Pergunta Curta" };

        const res = await request(app).put(`/api/tpquestions/${ newTpQuestion.id }`)
                                      .send(updateTpQuestion);

        expect(res.status).toEqual(200);
        expect(res.body.type).toEqual("Pergunta Curta");                                  
    });

    it("shoul be delete type question", async() => {
        const newTpQuestion = await prisma.type_questions.create({
            data: { type: "Delete Question?" },
        });

        const res = await request(app).delete(`/api/tpquestions/${ newTpQuestion.id }`);

        expect(res.statusCode).toEqual(204);

        const deleteTpQuestion = await prisma.type_questions.findUnique({
            where: { id: newTpQuestion.id },
        });

        expect(deleteTpQuestion).toBeNull();

    });

});