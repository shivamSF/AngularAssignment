import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
let DeleteService = class DeleteService {
    constructor(http) {
        this.http = http;
    }
    deleteUser(userId) {
        this.http.delete(environment.usersUrl + `/${userId}`).subscribe(data => { });
    }
    deleteCustomer(customerId) {
        this.http.delete(environment.customersUrl + `/${customerId}`).subscribe(data => { });
    }
};
DeleteService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], DeleteService);
export { DeleteService };
//# sourceMappingURL=delete.service.js.map