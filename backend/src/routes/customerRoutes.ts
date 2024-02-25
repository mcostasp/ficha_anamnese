import express, { Request, Response } from "express";
import pool from "../database/db";
import Customer from "../entities/Customer";

const router = express.Router();

//POST
router.post("/", async (req: Request, res: Response) => {
  try {
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
      country,
    } = req.body;

    // Validate request body
    if (!first_name || email) {
      return res
        .status(400)
        .json({ message: "Cliente falta informar nome e email" });
    }

    //Insert Customer
    const result = await pool.query(
      "INSERT INTO customer.data (first_name, last_name, age, birthdate, marital_status, phone, mobile, email, facebook, instagram, profession, address_line1, address_line2, state, province, zipcode, country, created_at)"
    );

    res.status(201).json({ message: "Customer create successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ messsage: "Internal server error" });
  }
});
