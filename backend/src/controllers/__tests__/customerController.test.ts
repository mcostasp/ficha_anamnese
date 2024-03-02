import request from 'supertest';
import app from '../../app';

describe('Ficha Anamnese API', () => {
    let customerId: number;
    it('should create a new customer', async () => {
        const res = await request(app).post('/api/customer').send({
            first_name: 'Marcelo',
            last_name: 'Costa',
            age: 42,
            birthdate: new Date('1981-08-03'),
            marital_status: 'tt',
            phone: '123456',
            mobile: '4545454',
            email: 'teste@teste123.com',
        });
        
        expect(res.status).toEqual(200);
        expect(res.body).toHaveProperty('id');
        customerId = res.body.id;
    });
    it('should get the created customer by id', async () => {
        const res = await request(app).get(`/api/customer/${customerId}`);

        expect(res.status).toEqual(200);
        expect(res.body).toHaveProperty('first_name');
    });

    it('should get all the customers', async() => {
        const res = await request(app).get('/api/customer/');

        expect(res.status).toEqual(200);
        expect(Array.isArray(res.body)).toBe(true);
    });
    
});