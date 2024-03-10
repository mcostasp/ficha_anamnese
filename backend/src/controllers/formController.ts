import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import createHttpError from "http-errors";

const prisma = new PrismaClient();

class FormController {
    async create(req: Request, res: Response): Promise<void>{
        try {
            const formData = req.body;
            const newForm = await prisma.form.create({ data: formData });
            res.json(newForm);
        } catch (error) {
            console.error("Erro create customer form", error);
            res.status(500).json({ message: "Failed to create customer form."});
        }
    }

    async getAll(req: Request, res: Response): Promise<void>{
        try {
            const form = await prisma.form.findMany();
            res.json(form);
        } catch (error) {
            console.error("Erro to get all customer form", error);
            res.status(500).json({ message: "Failed to get all customer form."});
        }
    }

    async getById(req: Request, res: Response): Promise<void>{
        try {
            const{ id } = req.params;
            const form = await prisma.form.findUnique({
                where: { id: parseInt(id) },
            });

            if(!form) throw createHttpError(404, "Customer Form not found.");
            
            res.json(form);
        } catch (error) {
            console.error("Erro to get customer form", error);
            res.status(500).json({ message: "Failed to get customer form."});            
        }
    }

    async update(req: Request, res: Response): Promise<void>{
        try {
            const formId = parseInt(req.params.id);
            const formData = req.body;
            const formUpdate = await prisma.form.update({
                where: { id: formId },
                data: formData,
            });
            res.json(formUpdate);
        } catch (error) {
            console.error("Erro to update customer form", error);
            res.status(500).json({ message: "Failed to update customer form."}); 
        }
    }

    async delete(req: Request, res: Response): Promise<void>{
        try {
            const formId = parseInt(req.params.id);
            await prisma.form.delete({ where: { id: formId }});
            res.sendStatus(204);
        } catch (error) {
            console.error("Erro to delete customer form", error);
            res.status(500).json({ message: "Failed to delete customer form."}); 
        }
    }

}

export default new FormController();