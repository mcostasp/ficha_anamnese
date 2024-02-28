import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import createHttpError from "http-errors";
import { validateCustomer } from "../utils/validator";

const prisma = new PrismaClient();

class CustomerController {
    async create(req: Request, res: Response) {
        try {
            // const { error } = validateCustomer(req.body);
            // if (error) {
            //     throw createHttpError(400, error.details[0].message);
            // }
            const {
                first_name,
                last_name,
                age,
                birthdate,
                marital_status,
                phone,
                mobile,
                email,
                facebook,
                instagram,
                profession,
                address_line1,
                address_line2,
                state,
                province,
                zipcode,
                country
            } = req.body;
            const customer = await prisma.data.create({
                data: {
                    first_name,
                    last_name,
                    age,
                    birthdate,
                    marital_status,
                    phone,
                    mobile,
                    email,
                    facebook,
                    instagram,
                    profession,
                    address_line1,
                    address_line2,
                    state,
                    province,
                    zipcode,
                    country
                }
            });
            res.json(customer);
        } catch (error: any) {
            res.status(error.status || 500).json({ error: error.message });
        }
    }
}

export default new CustomerController();