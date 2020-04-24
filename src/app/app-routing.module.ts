import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserTableComponent } from './user-table/user-table.component';
import { CustomerTableComponent } from './customer-table/customer-table.component';
import { RoleTableComponent } from './role-table/role-table.component';
import { RefreshComponent } from './refresh/refresh.component';


const routes: Routes = [
  {path:"",component: HomeComponent},
  {path:"usersTable",component:UserTableComponent},
  {path:"customersTable",component:CustomerTableComponent},
  {path:"rolesTable",component:RoleTableComponent},
  {path: "refresh", component:RefreshComponent},
  {path: "usersPerCustomer", component:UserTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
