import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
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
import { AuthComponent } from './auth/auth.component';
import { LoadingComponent } from '../extended-files/loading/loading.component';
import { GetTokenComponent } from '../extended-files/get-token/get-token.component';
import { AuthInterceptorService } from './auth/auth-intercepter.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserTableComponent,
    CustomerTableComponent,
    RoleTableComponent,
    NavbarComponent,
    RefreshComponent,
    AddDataComponent,
    AuthComponent,
    LoadingComponent,
    GetTokenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass : AuthInterceptorService, multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
