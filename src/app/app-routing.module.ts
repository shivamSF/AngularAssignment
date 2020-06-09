import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserTableComponent } from './user-table/user-table.component';
import { CustomerTableComponent } from './customer-table/customer-table.component';
import { RoleTableComponent } from './role-table/role-table.component';
import { RefreshComponent } from './refresh/refresh.component';
import { AuthComponent } from './auth/auth.component';
import { GetTokenComponent } from 'src/extended-files/get-token/get-token.component';
import { AuthGuard } from './auth/auth.guard';


export const routes: Routes = [
  {path:"",component: HomeComponent},
  {path:"usersTable",component:UserTableComponent},
  {path:"customersTable",component:CustomerTableComponent, canActivate: [AuthGuard]},
  {path:"rolesTable",component:RoleTableComponent, canActivate: [AuthGuard]},
  {path: "refresh", component:RefreshComponent},
  {path: "usersPerCustomer", component:UserTableComponent, canActivate: [AuthGuard]},
  {path: "userAuthentication", component:AuthComponent},
  {path:"getToken", component:GetTokenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
