import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserTableComponent } from './user-table/user-table.component';
import { CustomerTableComponent } from './customer-table/customer-table.component';
import { RoleTableComponent } from './role-table/role-table.component';
import { RefreshComponent } from './refresh/refresh.component';
import { AuthComponent } from './auth/auth.component';
export const routes = [
    { path: "", component: HomeComponent },
    { path: "usersTable", component: UserTableComponent },
    { path: "customersTable", component: CustomerTableComponent },
    { path: "rolesTable", component: RoleTableComponent },
    { path: "refresh", component: RefreshComponent },
    { path: "usersPerCustomer", component: UserTableComponent },
    { path: "userAuthentication", component: AuthComponent }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map