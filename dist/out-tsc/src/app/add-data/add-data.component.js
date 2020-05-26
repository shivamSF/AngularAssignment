import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AddDataComponent = class AddDataComponent {
    constructor(route, transferService, saveService, router, location) {
        this.route = route;
        this.transferService = transferService;
        this.saveService = saveService;
        this.router = router;
        this.location = location;
        this.initialSelect = "--SELECT";
        this.addUser = false;
        this.isClicked = false;
    }
    ngOnInit() {
        this.pathName = this.route.snapshot.routeConfig.path;
        if (this.pathName == 'usersTable') {
            this.btnName = 'ADD USER';
        }
        else {
            this.btnName = 'ADD CUSTOMER';
        }
    }
    onClick() {
        this.isClicked = true;
        this.transferService.getCustomers().subscribe(data => {
            this.customers = data;
        });
        this.transferService.getRoles().subscribe(data => {
            this.roles = data;
        });
        if (this.pathName == 'usersTable') {
            this.addUser = true;
        }
        else {
            this.addUser = false;
        }
    }
    onSave(form) {
        if (this.addUser) {
            this.saveService.addUser(form.value);
        }
        else {
            this.saveService.addCustomer(form.value);
        }
        this.router.navigateByUrl("/refresh", { skipLocationChange: true }).then(() => {
            this.router.navigate([decodeURI(this.location.path())]);
        });
    }
    onCancel() {
        this.isClicked = false;
    }
};
AddDataComponent = __decorate([
    Component({
        selector: 'app-add-data',
        templateUrl: './add-data.component.html',
        styleUrls: ['./add-data.component.css']
    })
], AddDataComponent);
export { AddDataComponent };
//# sourceMappingURL=add-data.component.js.map