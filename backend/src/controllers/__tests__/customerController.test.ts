import request from "supertest";
import app from "../../app";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

describe("Ficha Anamnese API - Customer", () => {
  let customerId: number;

  it("should delete all records", async () => {
    const res = await request(app).delete("/api/customer/");
    expect(res.statusCode).toEqual(204);
  });

  it("should create a new customer", async () => {
    const res = await request(app)
      .post("/api/customer")
      .send({
        first_name: "Marcelo",
        last_name: "Costa",
        age: 42,
        birthdate: new Date("1981-08-03"),
        marital_status: "tt",
        phone: "123456",
        mobile: "4545454",
        email: "create@email.com",
      });

    expect(res.status).toEqual(200);
    expect(res.body).toHaveProperty("id");
    customerId = res.body.id;
  });

  it("should get the created customer by id", async () => {
    const res = await request(app).get(`/api/customer/${customerId}`);

    expect(res.status).toEqual(200);
    expect(res.body).toHaveProperty("first_name");
  });

  it("should get all the customers", async () => {
    const res = await request(app).get("/api/customer/");

    expect(res.status).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it("should update an existing customer", async () => {
    const newCustomer = await prisma.data.create({
      data: { first_name: "Update Marcelo", email: "update@email.com" },
    });

    const updateCustomer = { last_name: "Silveira" };

    const res = await request(app)
      .put(`/api/customer/${newCustomer.id}`)
      .send(updateCustomer);

    expect(res.status).toEqual(200);
    expect(res.body.last_name).toEqual("Silveira");
  });

  it("should delete an existing customer", async () => {
    const newCustomer = await prisma.data.create({
      data: { first_name: "Delete Customer", email: "delete@email.com" },
    });

    const res = await request(app).delete(`/api/customer/${newCustomer.id}`);

    expect(res.statusCode).toEqual(204);

    //Check if customer already deleted from database
    const deletedCustomer = await prisma.data.findUnique({
      where: { id: newCustomer.id },
    });

    expect(deletedCustomer).toBeNull();
  });
});
