import request from "supertest";
import app from "../../app";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

describe("Ficha Anamnese API - Customer Service", () => {

    it("should create a new service", async() =>{
        const customerId = await prisma.data.findFirst({});
        const servicesId = await prisma.services.findFirst({});
        const res = await request(app).post("/api/service/").send({
            customer_id: customerId?.id,
            service_id: servicesId?.id,
        });

        expect(res.status).toEqual(200);
        expect(res.body).toHaveProperty("id");
    });

    it("should get all customer service", async() =>{
        const res = await request(app).get("/api/service/");

        expect(res.status).toEqual(200);
        expect(Array.isArray(res.body)).toBe(true);
    });

    it("should get a service", async() =>{
        const serviceId = await prisma.service.findFirst({});
        const res = await request(app).get(`/api/service/${serviceId?.id}`);

        expect(res.status).toEqual(200);
        expect(res.body).toHaveProperty("customer_id");
    });

    it("should delete an existing service", async() =>{
        const serviceId = await prisma.service.findFirst({});
        const res = await request(app).delete(`/api/service/${serviceId?.id}`);

        expect(res.statusCode).toEqual(204);

        const deleteServ = await prisma.service.findUnique({
            where: { id: serviceId?.id },
        });

        expect(deleteServ).toBeNull();
    });
});