import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
let TransferService = class TransferService {
    constructor(http) {
        this.http = http;
    }
    getUsers() {
        return this.http.get(environment.usersUrl);
    }
    getRoles() {
        return this.http.get(environment.rolesUrl);
    }
    getCustomers() {
        return this.http.get(environment.customersUrl);
    }
    getUsersPerCustomer(customerId) {
        this.customerId = customerId;
    }
    returnUsersPerCustomers() {
        return this.http.get(environment.customersUrl + '/' + this.customerId + `/users`);
    }
    returnSingleCustomer() {
        return this.http.get(environment.customersUrl + '/' + this.customerId);
    }
};
TransferService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], TransferService);
export { TransferService };
//# sourceMappingURL=transfer.service.js.map