import { HttpClient, HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.modules";
import { AppComponent } from "./app.component";


import { CustomerListComponent } from "./components/customers/customer-list/customer-list.component";
import { CustomerService } from "./services/customer.service";



@NgModule({
    declarations: [
        AppComponent,
        CustomerListComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        AppRoutingModule,
        HttpClientModule,
        HttpClient
    ],
    providers: [CustomerService],
    bootstrap: [AppComponent]
})

export class AppModule { }
