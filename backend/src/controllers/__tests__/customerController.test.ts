import request from 'supertest';
import app from '../../app';

describe('Ficha Anamnese API', () => {
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
    })
});