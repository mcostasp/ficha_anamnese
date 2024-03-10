import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import createHttpError from "http-errors";

const prisma = new PrismaClient();

class FormsController {
    async create(req: Request, res: Response): Promise<void>{
        try {
            const formData = req.body;
            const newForm = await prisma.forms.create({ data: formData });
            res.json(newForm);
        } catch (error) {
            console.error("Error create form", error);
            res.status(500).json({ message: "Failed to create form."});
        }
    }

    async getAll(req: Request, res: Response): Promise<void> {
        try {
            const forms = await prisma.forms.findMany();
            res.json(forms);
        } catch (error) {
            console.error("Error get form", error);
            res.status(500).json({ message: "Failed to get form."});
        }
    }

    async deleteAll(req: Request, res: Response): Promise<void> {
        try {
            await prisma.forms.deleteMany();
            res.sendStatus(204);
        } catch (error) {
            console.error("Error delete all forms", error);
            res.status(500).json({ message: "Failed to delete all forms."});
        }
    }

    async getById(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const forms = await prisma.forms.findUnique({
                where: { id: parseInt(id) }
            });

            if(!forms) throw createHttpError(404, "Form not found.");

            res.json(forms);
        } catch (error) {
            console.error("Error get form", error);
            res.status(500).json({ message: "Failed to get form."});
        }
    }

    async update(req: Request, res: Response): Promise<void> {
        try {
            const formId = parseInt(req.params.id);
            const formData = req.body;
            const formUpdate = await prisma.forms.update({
                where: { id: formId },
                data: formData,
            });
            res.json(formUpdate);
        } catch (error) {
            console.error("Error update form", error);
            res.status(500).json({ message: "Failed update form."}); 
        }
    }

    async delete(req: Request, res: Response): Promise<void> {
        try {
            const formId = parseInt(req.params.id);
            await prisma.forms.delete({ where: { id: formId } });
            res.sendStatus(204);
        } catch (error) {
            console.error("Error delete form", error);
            res.status(500).json({ message: "Failed delete form."});   
        }
    }

}

export default new FormsController();