import { Request, Response } from "express";
import pool from "../database/db";
import Customer from "../entities/Customer";

class CustomerController {
  async createCustomer(req: Request, res: Response) {
    try {
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
}
