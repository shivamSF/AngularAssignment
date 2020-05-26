import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
let SaveService = class SaveService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
    }
    saveUsers(user, userId) {
        this.http.patch(environment.usersUrl + `/${userId}`, user).subscribe(resp => {
        });
    }
    saveCustomers(customer, customerId) {
        this.http.patch(environment.customersUrl + `/${customerId}`, customer).subscribe(resp => {
        });
    }
    addUser(user) {
        this.http.post(environment.usersUrl, user).subscribe(resp => { });
    }
    addCustomer(customer) {
        this.http.post(environment.customersUrl, customer).subscribe(resp => { });
    }
};
SaveService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], SaveService);
export { SaveService };
//# sourceMappingURL=save.service.js.map