import request from "supertest";
import app from "../../app";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

describe("Ficha Anamnese API - Core Services", () => {
  let serviceId: number;

/*   it("should delete all records", async () => {
    const res = await request(app).delete("/api/services/");
    expect(res.statusCode).toEqual(204);
  }); */

  it("should create new service", async () => {
    const res = await request(app).post("/api/services/").send({
      service_name: "Titura",
    });

    expect(res.status).toEqual(200);
    expect(res.body).toHaveProperty("id");
    serviceId = res.body.id;
  });

  it("should get the service by id", async () => {
    const res = await request(app).get(`/api/services/${serviceId}`);

    expect(res.status).toEqual(200);
    expect(res.body).toHaveProperty("service_name");
  });

  it("should get all the services", async () => {
    const res = await request(app).get("/api/services/");

    expect(res.status).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it("should update an existing service", async () => {
    const newService = await prisma.services.create({
      data: { service_name: "Corte Mulher" },
    });

    const updateService = { service_name: "Microblanding" };

    const res = await request(app)
      .put(`/api/services/${newService.id}`)
      .send(updateService);

    expect(res.status).toEqual(200);
    expect(res.body.service_name).toEqual("Microblanding");
  });

  it('should be delete an existing service', async() => {
    const newService = await prisma.services.create({
        data: { service_name: 'Del Service' },
    });

    const res = await request(app).delete(`/api/services/${newService.id}`);

    expect(res.statusCode).toEqual(204);

    const deleteService = await prisma.data.findUnique({
        where: { id: newService.id },
    });

    expect(deleteService).toBeNull();

  });

});
