import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
//import createHttpError from "http-errors";
//import { validateCustomer } from "../utils/validator";

const prisma = new PrismaClient();

class CustomerController {
    async create(req: Request, res: Response) {
        try {
            // const { error } = validateCustomer(req.body);
            // if (error) {
            //     throw createHttpError(400, error.details[0].message);
            // }
            const customer = await prisma.data.create({
                data: req.body,
            });
            res.json(customer);
        } catch (error: any) {
            res.status(error.status || 500).json({ error: error.message });
        }
    }
}

export default new CustomerController();