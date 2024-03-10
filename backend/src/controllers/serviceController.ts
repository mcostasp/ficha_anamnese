import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import createHttpError from "http-errors";

const prisma = new PrismaClient();

class FormController {
    async create(req: Request, res: Response): Promise<void> {
        try {
            const servData = req.body;
            const newService = await prisma.service.create({ data: servData });
            res.json(newService);
        } catch (error) {
            console.error("Erro create service", error);
            res.status(500).json({ message: "Failed create service "});
        }
    }

    async getAll(req: Request, res: Response): Promise<void> {
        try {
            const service = await prisma.service.findMany();
            res.json(service);
        } catch (error) {
            console.error("Erro to get all service", error);
            res.status(500).json({ message: "Failed get all service "});
        }
    }

    async getById(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const service = await prisma.service.findUnique({
                where: { id: parseInt(id) }
            });

            if(!service) throw createHttpError(404, "Service not found.");

            res.json(service);

        } catch (error) {
            console.error("Erro to get service", error);
            res.status(500).json({ message: "Failed to get service "});
        }
    }

/*     async update(req: Request, res: Response): Promise<void> {
        try {
            
        } catch (error) {
            console.error("Erro update service", error);
            res.status(500).json({ message: "Failed update service "});
        }
    } */

    async delete(req: Request, res: Response): Promise<void> {
        try {
            const serviceId = parseInt(req.params.id);
            await prisma.service.delete({ where: { id: serviceId }});
            res.sendStatus(204);
        } catch (error) {
            console.error("Erro delete service", error);
            res.status(500).json({ message: "Failed to delete service "});
        }
    }
}

export default new FormController();