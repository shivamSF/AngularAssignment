import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
let AuthComponent = class AuthComponent {
    constructor(route, location, authService, router) {
        this.route = route;
        this.location = location;
        this.authService = authService;
        this.router = router;
        this.isLoading = false;
    }
    ngOnInit() {
        this.title = this.route.snapshot.paramMap.get('title');
        if (this.title === 'login') {
            this.isLogin = true;
        }
        else if (this.title === 'signUp') {
            this.isLogin = false;
        }
    }
    onLogin(form) {
        return __awaiter(this, void 0, void 0, function* () {
            this.isLoading = true;
            this.authService.login(form.value).subscribe(() => {
                this.isLoading = false;
                this.router.navigate(['/']);
            }, error => {
                console.log(error);
                this.isLoading = false;
            });
            form.reset();
        });
    }
    onSignUp(form) {
        this.authService.signUp(form.value);
    }
    toggle(content) {
        this.router.navigateByUrl("/refresh", { skipLocationChange: true }).then(() => {
            this.router.navigate(['userAuthentication', { title: content }]);
        });
    }
    onGoogleOAuth() {
        this.authService.googleOAuth();
    }
};
AuthComponent = __decorate([
    Component({
        selector: 'app-auth',
        templateUrl: './auth.component.html',
        styleUrls: ['./auth.component.css']
    })
], AuthComponent);
export { AuthComponent };
//# sourceMappingURL=auth.component.js.map