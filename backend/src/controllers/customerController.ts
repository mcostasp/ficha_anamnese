import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import createHttpError from "http-errors";
//import createHttpError from "http-errors";
//import { validateCustomer } from "../utils/validator";

const prisma = new PrismaClient();

class CustomerController {
  async create(req: Request, res: Response): Promise<void> {
    try {
      // const { error } = validateCustomer(req.body);
      // if (error) {
      //     throw createHttpError(400, error.details[0].message);
      // }
      const customerData = req.body;
      const newCustomer = await prisma.data.create({ data: customerData });
      res.json(newCustomer);
    } catch (error) {
      console.error("Error create customer:", error);
      res.status(500).json({ message: "Failed to create customer." });
    }
  }

  async getAll(req: Request, res: Response): Promise<void> {
    try {
      const customer = await prisma.data.findMany();
      res.json(customer);
    } catch (error) {
      console.error("Error create customer:", error);
      res.status(500).json({ message: "Failed to create customer." });
    }
  }

  async deleteAll(req: Request, res: Response): Promise<void>{
    try {
      await prisma.data.deleteMany();      
      res.sendStatus(204);
    } catch (error) {
      console.error("Error for erase tables.", error);
      res.status(500).json({ message: "Failed to delete all tables."});
    }

  }

  async getById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const customer = await prisma.data.findUnique({
        where: { id: parseInt(id) },
      });
      if (!customer) {
        throw createHttpError(404, "Customer not found");
      }
      res.json(customer);
    } catch (error) {
      console.error("Error get customer:", error);
      res.status(500).json({ message: "Failed to get customer." });
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    try {
      const customerId = parseInt(req.params.id);
      const customerData = req.body;
      if (customerData.email) {
        const emailExist = await prisma.data.findUnique({
          where: { email: customerData.email },
        });
        if (emailExist) {
          throw createHttpError(404, "Email already exists");
        }
      }
      const customerUpdate = await prisma.data.update({
        where: { id: customerId },
        data: customerData,
      });
      res.json(customerUpdate);
    } catch (error) {
      console.error("Error deleting customer:", error);
      res.status(500).json({ message: "Failed to update customer." });
    }
  }

  async delete(req: Request, res: Response): Promise<void> {
    try {
      const customerId = parseInt( req.params.id );
      await prisma.data.delete({ where: { id: customerId } });      
      res.sendStatus(204);
    } catch (error) {
      console.error("Error deleting customer:", error);
      res.status(500).json({ message: "Failed to delete Customer." });
    }
  }
}

export default new CustomerController();
