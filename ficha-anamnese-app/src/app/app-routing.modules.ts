import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CustomerListComponent } from "./components/customers/customer-list/customer-list.component";

const routes: Routes = [
    { path: '', redirectTo: '/customers', pathMatch: 'full'},
    { path: 'customers', component: CustomerListComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}