import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import createHttpError from "http-errors";

const prisma = new PrismaClient();

class QuestionsController {
    async create(req: Request, res: Response): Promise<void> {
        try {  
            const questionData = req.body;    
            const newQuestion = await prisma.questions.create({ data: questionData });
            res.json(newQuestion);
        } catch (error) {
            console.error("Error create Question.", error);
            res.status(500).json({ message: "Failed to create Question" });
        }
    }

    async getAll(req: Request, res: Response): Promise<void>{
        try {
            const questions = await prisma.questions.findMany();
            res.json(questions);
        } catch (error) {
            console.error("Error to get Question.", error);
            res.status(500).json({ message: "Failed to get Question" });            
        }
    }

    async deleteAll(req: Request, res: Response): Promise<void>{
        try {
            await prisma.questions.deleteMany();
            res.sendStatus(204);
        } catch (error) {
            console.error("Error to delete Questions.", error);
            res.status(500).json({ message: "Failed to delete Questions" }); 
        }
    }

    async getById(req: Request, res: Response): Promise<void>{
        try {
            const { id } = req.params;
            const questions = await prisma.questions.findUnique({
                where: { id: parseInt(id) },
            });

            if(!questions) throw createHttpError(404, "Question not found");
            
            res.json(questions);
        } catch (error) {
            console.error("Error to get Question.", error);
            res.status(500).json({ message: "Failed to get Question" }); 
        }
    }

    async update(req: Request, res: Response): Promise<void>{
        try {
            const questionId = parseInt( req.params.id );
            const questionData = req.body;
            const questionUpdate = await prisma.questions.update({
                where: { id: questionId },
                data: questionData,
            });
            res.json(questionUpdate);
        } catch (error) {
            console.error("Error to update Question.", error);
            res.status(500).json({ message: "Failed to update Question" }); 
        }
    }

    async delete(req: Request, res: Response): Promise<void>{
        try {
            const questionId = parseInt(req.params.id);
            await prisma.questions.delete({ where: { id: questionId } });
            res.sendStatus(204);
        } catch (error) {
            console.error("Error to delete Question.", error);
            res.status(500).json({ message: "Failed to delete Question" }); 
        }
    }
}


export default new QuestionsController();