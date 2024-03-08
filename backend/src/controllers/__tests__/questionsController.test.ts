import request from "supertest";
import app from "../../app";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

describe("Ficha Anamnese API - Core Questions", () => {
    let questionId: number;

    it("should delete all records", async () => {
        const res = await request(app).delete("/api/questions/");
        expect(res.statusCode).toEqual(204);
    });

    it("should create new Question", async() => {
        let tpQuestionId = await prisma.type_questions.findFirst();
        if(!tpQuestionId){
            tpQuestionId = await prisma.type_questions.create({
                data: { type: "LGPD"}
            });
        }

        const res = await request(app).post("/api/questions/").send({ 
            question: "Permissão gravar dados ?",
            tp_question_id: tpQuestionId.id,  
        });
        
        expect(res.status).toEqual(200);
        expect(res.body).toHaveProperty("id");        
        questionId = res.body.id;
    });

    it("should get the question by id", async () => {
        const tpQuestId = await prisma.type_questions.findFirst();
        const newQuest = await prisma.questions.create({
            data: {
                question: "Já fez tintura ?", 
                tp_question_id: tpQuestId.id
            }
        });
    
        const res = await request(app).get(`/api/questions/${newQuest.id}`);

        expect(res.status).toEqual(200);
        expect(res.body).toHaveProperty("question");
    });

    it("should get all the questions", async () => {
        const res = await request(app).get("/api/questions/");

        expect(res.status).toEqual(200);
        expect(Array.isArray(res.body)).toBe(true);
    });

    it("should update an existing question", async () => {
        const tpQuestId = await prisma.type_questions.findFirst();
        
        const newQuest = await prisma.questions.create({
            data: {
                question: "Tem tatuagem ?", 
                tp_question_id: tpQuestId.id
            }
        });        

        const updateQuestion = { question: "Tem cicatrizes ?" };

        const res = await request(app)
            .put(`/api/questions/${newQuest.id}`)
            .send(updateQuestion);

        expect(res.status).toEqual(200);
        expect(res.body.question).toEqual("Tem tatuagem ?");
    });

    it("should be delete an existing question", async () => {
        const tpQuestId = await prisma.type_questions.findFirst();
        const newQuest = await prisma.questions.create({
            data: {
                question: "Tem tatuagem ?", 
                tp_question_id: tpQuestId.id
            }
        });   
        
        const res = await request(app).delete(`/api/questions/${newQuest.id}`);

        expect(res.statusCode).toEqual(204);

        const delQuest = await prisma.questions.findUnique({
            where: { id: newQuest.id },
        });

        expect(delQuest).toBeNull;
        
    });

});