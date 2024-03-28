import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CustomerListComponent } from "./components/customers/customer-list/customer-list.component";
import { CustomerDetailComponent } from "./components/customers/customer-detail/customer-detail.component";


export const routes: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full'},
    { path: 'customers', component: CustomerListComponent },
    { path: 'customer/:id', component: CustomerDetailComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{ }