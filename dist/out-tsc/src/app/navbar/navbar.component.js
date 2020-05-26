import { __decorate } from "tslib";
import { Component } from '@angular/core';
let NavbarComponent = class NavbarComponent {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
        let pathName = this.route.snapshot.routeConfig.path;
        if (pathName == 'usersTable') {
            this.pageName = "Users Table";
            this.otherPage1 = "Customers Table";
            this.otherPage1Link = "customersTable";
            this.otherPage2 = "Roles Table";
            this.otherPage2Link = "rolesTable";
        }
        else if (pathName == 'customersTable') {
            this.pageName = "Customers Table";
            this.otherPage1 = "Users Table";
            this.otherPage1Link = "usersTable";
            this.otherPage2 = "Roles Table";
            this.otherPage2Link = "rolesTable";
        }
        else if (pathName == 'usersPerCustomer') {
            this.pageName = "Users By Customer";
            this.otherPage1 = "Customers Table";
            this.otherPage1Link = "customersTable";
            this.otherPage2 = "Roles Table";
            this.otherPage2Link = "rolesTable";
            this.otherPage3 = 'Users Table';
            this.otherPage3Link = "usersTable";
        }
        else {
            this.pageName = "Roles Table";
            this.otherPage1 = "Users Table";
            this.otherPage1Link = "usersTable";
            this.otherPage2 = "Customers table";
            this.otherPage2Link = "customersTable";
        }
    }
};
NavbarComponent = __decorate([
    Component({
        selector: 'app-navbar',
        templateUrl: './navbar.component.html',
        styleUrls: ['./navbar.component.css']
    })
], NavbarComponent);
export { NavbarComponent };
//# sourceMappingURL=navbar.component.js.map