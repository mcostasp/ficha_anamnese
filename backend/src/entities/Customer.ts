class Customer {
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
    
    constructor(
            id: number, 
            first_name: string,
            last_name: string,
            age: number,
            birthdate: Date,
            marital_status: string,
            phone: string,
            mobile: string,
            email: string,
            facebook: string,
            instagram: string,
            profession: string,
            address_line1: string,
            address_line2: string,
            state: string,
            province: string,
            zipcode: string,
            country: string,
            created_at: Date            
            ){
        this.id = id;
        this.first_name = first_name;
        this.last_name: last_name;
        this.age: age;
        this.birthdate: birthdate;
        this.marital_status: marital_status;
        this.phone: phone;
        this.mobile: mobile;
        this.email: email;
        this.facebook: facebook;
        this.instagram: instagram;
        this.profession: profession;
        this.address_line1: address_line1;
        this.address_line2: address_line2;
        this.state: state;
        this.province: province;
        this.zipcode: zipcode;
        this.country: country;
        this.created_at: new Date().toISOString();        
    }
}

export default Customer;