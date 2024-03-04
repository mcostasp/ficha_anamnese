import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import createHttpError from "http-errors";

const prisma = new PrismaClient();

class ServicesController {
  async create(req: Request, res: Response): Promise<void> {
    try {
        const serviceData = req.body;
        const newService = await prisma.services.create({ data: serviceData });
        res.json(newService);
    } catch (error) {
      console.error("Error create service", error);
      res.status(500).json({ message: "Failed to create service." });
    }
  }

  async getAll(req: Request, res: Response): Promise<void>{
    try {
      const services = await prisma.services.findMany();
      res.json(services);
    } catch (error) {
      console.error("Erro get Services", error);
      res.status(500).json({ message: "Failed to get services" });
    }
  }
  
  async deleteAll(req: Request, res: Response): Promise<void> {
    try {
      await prisma.services.deleteMany();
      res.sendStatus(204);
    } catch (error) {
      console.error("Erro delete all Services", error);
      res.status(500).json({ message: "Failed to delete services" });
    }
  }

  async getById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const service = await prisma.services.findUnique({
        where: { id: parseInt(id) },
      });

      if(!service){
        throw createHttpError(404, "Service not found");
      }
      res.json(service);
    } catch (error) {
      console.error("Erro get all Services", error);
      res.status(500).json({ message: "Failed to get services" });
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    try {
      const serviceId = parseInt(req.params.id);
      const serviceData = req.body;
      const serviceUpdate = await prisma.services.update({
        where: { id: serviceId },
        data: serviceData,
      });
      res.json(serviceUpdate);
    } catch (error) {
      console.error("Erro update Service", error);
      res.status(500).json({ message: "Failed to update service" });
    }
  }

  async delete(req: Request, res: Response): Promise<void>{
    try {
      const serviceId = parseInt(req.params.id);
      await prisma.services.delete( { where: { id: serviceId } });
      res.sendStatus(204);
    } catch (error) {
      console.error("Erro delete Service", error);
      res.status(500).json({ message: "Failed to delete service" });
    }
  }  

}

export default new ServicesController();