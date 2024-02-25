import pool from '.';

export interface Customer {
    id?: number;
    first_name: string;
    last_name: string;
    age: number;
    birthdate: Date;
    marital_status: string;
    phone: string;
    mobile: string;
    email: string;
    facebook: string;
    instagram: string;
    profession: string;
    address_line1: string;
    address_line2: string;
    state: string;
    province: string;
    zipcode: string;
    country: string;
    created_at: Date;
}

export class CustomerModel {
    async getAll(): Promise<Customer[]> {
        const result = await pool.query('Select * from customer.data');
        return result.rows; 
    }

    async getById(id: number): Promise<Customer | null> {
        const result = await pool.query('SELECT * FROM customer.data WHERE id = $1', [id]);
        return result.rows[0];
    }

    async create(customer: Customer): Promise<Customer> {
        const { first_name,
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
                created_at = new Date().toISOString()
            } = customer;
        
        const result = await pool.query()
    }
}