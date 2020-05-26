import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
let UserTableComponent = class UserTableComponent {
    constructor(http, saveService, route, location, deleteService, transferService, activeRoute) {
        this.http = http;
        this.saveService = saveService;
        this.route = route;
        this.location = location;
        this.deleteService = deleteService;
        this.transferService = transferService;
        this.activeRoute = activeRoute;
        this.isClicked = false;
        this.isUserPerCustomer = false;
    }
    ngOnInit() {
        let pathName = this.activeRoute.snapshot.routeConfig.path;
        if (pathName == 'usersPerCustomer') {
            this.isUserPerCustomer = true;
            this.transferService.returnUsersPerCustomers().subscribe(data => {
                this.userData = data;
            });
            this.transferService.returnSingleCustomer().subscribe(data => {
                this.singleCustomer = data;
            });
        }
        else {
            this.transferService.getUsers().subscribe(data => {
                this.userData = data;
            });
        }
        this.transferService.getRoles().subscribe(data => {
            this.roles = data;
        });
        this.transferService.getCustomers().subscribe(data => {
            this.customers = data;
        });
    }
    checkCondition(userId) {
        if (this.isClicked && this.userId == userId) {
            return true;
        }
        else {
            return false;
        }
    }
    onEdit(userId, roleId, CustomerId) {
        this.isClicked = true;
        this.userId = userId;
        this.selectedRole = roleId;
        this.selectedCustomers = CustomerId;
    }
    onDelete(userId) {
        this.deleteService.deleteUser(userId);
        this.onRefresh();
    }
    onSave(form) {
        return __awaiter(this, void 0, void 0, function* () {
            this.saveService.saveUsers(form.value, this.userId);
            this.onRefresh();
        });
    }
    onCancel() {
        this.isClicked = false;
    }
    onRefresh() {
        this.route.navigateByUrl("/refresh", { skipLocationChange: true }).then(() => {
            this.route.navigate([decodeURI(this.location.path())]);
        });
    }
};
UserTableComponent = __decorate([
    Component({
        selector: 'app-user-table',
        templateUrl: './user-table.component.html',
        styleUrls: ['./user-table.component.css']
    })
], UserTableComponent);
export { UserTableComponent };
//# sourceMappingURL=user-table.component.js.map