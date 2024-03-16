import { HttpClient, HttpClientModule } from "@angular/common/http";
import { NgModule, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.modules";
import { AppComponent } from "./app.component";
import { CustomerListComponent } from "./components/customers/customer-list/customer-list.component";

@NgModule({
    declarations: [
        AppComponent,
        CustomerListComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
