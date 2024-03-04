import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import createHttpError from "http-errors";

const prisma = new PrismaClient();

class TpQuestionsController {
    async create(req: Request, res: Response): Promise<void> {
        try {
            const tpquestionData = req.body;
            const newTpQuestion = await prisma.type_questions.create({ data: tpquestionData });
            res.json(newTpQuestion);
        } catch (error) {
            console.error("Error create Type Question", error);
            res.status(500).json({ message: "Failed to create Type Question." });
        }
    }

    async getAll(req: Request, res: Response): Promise<void> {
        try {
            const tpquestion = await prisma.type_questions.findMany();
            res.json(tpquestion);
        } catch (error) {
            console.error("Error get Type Question", error);
            res.status(500).json({ message: "Failed to get all Type Question." });
        }
    }

    async deleteAll(req: Request, res: Response): Promise<void> {
        try {
            await prisma.type_questions.deleteMany();
            res.sendStatus(204);
        } catch (error) {
            console.error("Error delete all Type Question", error);
            res.status(500).json({ message: "Failed to delete all Type Question." });
        }
    }

    async getById(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const tpquestion = await prisma.type_questions.findUnique({
                where: { id: parseInt(id) },
            });
            if (!tpquestion) throw createHttpError(404, "Type Question not found");
            res.json(tpquestion);
        } catch (error) {
            console.error("Error get Type Question", error);
            res.status(500).json({ message: "Failed to get Type Question." });
        }
    }

    async update(req: Request, res: Response): Promise<void> {
        try {
            const tpquestionId = parseInt(req.params.id);
            const tpquestionData = req.body;
            const tpquestionUpdate = await prisma.type_questions.update({
                where: { id: tpquestionId },
                data: tpquestionData,
            });
            res.json(tpquestionUpdate);
        } catch (error) {
            console.error("Error Update Type Question", error);
            res.status(500).json({ message: "Failed Update Type Question." });
        }
    }

    async delete(req: Request, res: Response): Promise<void> {
        try {
            const tpquestionId = parseInt(req.params.id);
            await prisma.type_questions.delete({ where: { id: tpquestionId } });
            res.sendStatus(204);
        } catch (error) {
            console.error("Error Delete Type Question", error);
            res.status(500).json({ message: "Failed Delete Type Question." });
        }
    }

}

export default new TpQuestionsController();