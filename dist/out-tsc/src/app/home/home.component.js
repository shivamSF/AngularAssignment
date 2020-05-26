import { __decorate } from "tslib";
import { Component } from '@angular/core';
let HomeComponent = class HomeComponent {
    constructor(router, route, authService) {
        this.router = router;
        this.route = route;
        this.authService = authService;
        this.isAuthenticated = false;
    }
    ngOnInit() {
        console.log(this.authService.user);
        this.userSub = (this.authService.user).subscribe((user) => {
            this.isAuthenticated = !!user;
            console.log(user);
        });
        // console.log(this.route.snapshot.queryParams)
    }
    onLoad(content) {
        if (content == 'USERS-TABLE') {
            this.router.navigate(['usersTable']);
        }
        else if (content == 'CUSTOMERS-TABLE') {
            this.router.navigate(['customersTable']);
        }
        else {
            this.router.navigate(['rolesTable']);
        }
    }
    onAuth(content) {
        this.router.navigate(['userAuthentication', { title: content }]);
    }
    ngOnDestroy() {
        this.userSub.unsubscribe();
    }
};
HomeComponent = __decorate([
    Component({
        selector: 'app-home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.css']
    })
], HomeComponent);
export { HomeComponent };
//# sourceMappingURL=home.component.js.map