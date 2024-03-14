import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';

const routes: Routes = [
    { path: 'customer', component: CustomerListComponent },
    { path: '', redirectTo: '/customer', pathMatch: 'full'},
    { path: '**', redirectTo: '/customer', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }

export{ routes };
