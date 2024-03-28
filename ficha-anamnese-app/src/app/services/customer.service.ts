import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Customer } from '../models/customer.model';


@Injectable({
    providedIn: 'root'
})

export class CustomerService {
    private apiUrl = 'http://localhost:3000/api/customer';

    constructor(private http: HttpClient) { }

    getCustomers(): Observable<Customer[]> {
        return this.http.get<Customer[]>(this.apiUrl);
    }

    getCustomer(id: number): Observable<Customer> {
        const url = `${this.apiUrl}/${id}`;
        return this.http.get<Customer>(url);
    }

    createCustomer(customer: Customer): Observable<Customer> {
        return this.http.post<Customer>(this.apiUrl, customer);
    }

    updateCustomer(customer: Customer): Observable<Customer> {
        const url = `${this.apiUrl}/${customer.id}`;
        return this.http.put<Customer>(url, customer);
    }

    deleteCustomer(id: number): Observable<void> {
        const url = `${this.apiUrl}/${id}`;
        return this.http.delete<void>(url);
    }
}
