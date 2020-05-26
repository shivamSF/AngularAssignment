import { __decorate } from "tslib";
import { Component } from '@angular/core';
let CustomerTableComponent = class CustomerTableComponent {
    constructor(http, saveService, route, location, deleteService, transferService) {
        this.http = http;
        this.saveService = saveService;
        this.route = route;
        this.location = location;
        this.deleteService = deleteService;
        this.transferService = transferService;
        this.isClicked = false;
    }
    ngOnInit() {
        this.transferService.getCustomers().subscribe(data => {
            this.customerData = data;
        });
    }
    checkCondition(customerId) {
        if (this.isClicked && this.customerId == customerId) {
            return true;
        }
        else {
            return false;
        }
    }
    onEdit(customerId) {
        this.isClicked = true;
        this.customerId = customerId;
    }
    onDelete(customerId) {
        this.deleteService.deleteCustomer(customerId);
        this.onRefresh();
    }
    onSave(form) {
        this.saveService.saveCustomers(form.value, this.customerId);
        this.onRefresh();
    }
    onCancel() {
        this.isClicked = false;
    }
    onRefresh() {
        this.route.navigateByUrl("/refresh", { skipLocationChange: true }).then(() => {
            this.route.navigate([decodeURI(this.location.path())]);
        });
    }
    onShowUsers(customerId) {
        this.transferService.getUsersPerCustomer(customerId);
        this.route.navigate(['usersPerCustomer']);
    }
};
CustomerTableComponent = __decorate([
    Component({
        selector: 'app-customer-table',
        templateUrl: './customer-table.component.html',
        styleUrls: ['./customer-table.component.css']
    })
], CustomerTableComponent);
export { CustomerTableComponent };
//# sourceMappingURL=customer-table.component.js.map