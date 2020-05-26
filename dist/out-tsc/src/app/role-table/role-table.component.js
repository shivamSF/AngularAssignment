import { __decorate } from "tslib";
import { Component } from '@angular/core';
let RoleTableComponent = class RoleTableComponent {
    constructor(http, transferService) {
        this.http = http;
        this.transferService = transferService;
    }
    ngOnInit() {
        this.transferService.getRoles().subscribe(data => {
            this.roles = data;
        });
    }
};
RoleTableComponent = __decorate([
    Component({
        selector: 'app-role-table',
        templateUrl: './role-table.component.html',
        styleUrls: ['./role-table.component.css']
    })
], RoleTableComponent);
export { RoleTableComponent };
//# sourceMappingURL=role-table.component.js.map