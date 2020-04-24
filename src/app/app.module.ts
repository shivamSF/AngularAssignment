import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserTableComponent } from './user-table/user-table.component';
import { CustomerTableComponent } from './customer-table/customer-table.component';
import { RoleTableComponent } from './role-table/role-table.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RefreshComponent } from './refresh/refresh.component';
import { AddDataComponent } from './add-data/add-data.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserTableComponent,
    CustomerTableComponent,
    RoleTableComponent,
    NavbarComponent,
    RefreshComponent,
    AddDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
