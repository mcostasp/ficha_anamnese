import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer.model';
import { CustomerService } from '../customer.service';
import {NgFor, NgForOf} from "@angular/common"

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [NgFor, NgForOf],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export class CustomerListComponent implements OnInit {
  customers!: Customer[];

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers() {
    this.customerService.getCustomer().subscribe(customers => {
      this.customers = customers;
    });
  }
}
