import request from 'supertest';
import app from '../../app';

describe('Ficha Anamnese API', () => {
    it('should create a new customer', async () => {
        const res = await request(app).post('/api/customer').send({
            first_name: 'Marcelo',
            last_name: 'Costa',
            age: 42,
            birthdate: '1981-08-03',
            country: 'Portugal'
        });
        expect(res.status).toEqual(200);
        expect(res.body).toHaveProperty('id');
    })
});