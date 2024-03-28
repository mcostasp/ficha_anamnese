import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../../../services/customer.service';
import { Customer } from '../../../models/customer.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-customer-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customer-detail.component.html',
  styleUrl: './customer-detail.component.css'
})
export class CustomerDetailComponent implements OnInit {
  customer: Customer | undefined;

  constructor(
    private customerService: CustomerService,
    private router: Router,
    private route: ActivatedRoute
    ) {}

  ngOnInit(): void {    
    this.detailCustomer();
  }

  detailCustomer(): void {
    const param = this.route.snapshot.paramMap.get('id');
    const id = param?+param:0;
    this.customerService.getCustomer(id).subscribe( customer => {
      this.customer = customer;
    })
  }

}
