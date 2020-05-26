import { __decorate, __param } from "tslib";
import { Injectable, Inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DOCUMENT } from '@angular/common';
import { Subject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from './auth/user.model';
let AuthService = class AuthService {
    constructor(http, document) {
        this.http = http;
        this.document = document;
        this.user = new Subject();
    }
    login(content) {
        return this.http.post(environment.BASEURL + 'auth/login', content)
            .pipe(catchError(this.handleError), tap(resData => {
            this.handleAuthentication(resData.email, resData.authProvider, resData.code, +resData.expiresIn);
        }));
    }
    handleAuthentication(email, authProvider, token, expiresIn) {
        const expirationDate = new Date(new Date().getTime() + expiresIn);
        const user = new User(email, authProvider, token, expirationDate);
        this.user.next(user);
    }
    handleError(errorRes) {
        let errorMessage = 'An unknown error occurred!';
        if (!errorRes.error || !errorRes.error.error) {
            return throwError(errorMessage);
        }
        switch (errorRes.error.error.message) {
            case 'EMAIL_EXISTS':
                errorMessage = 'This email exists already';
                break;
            case 'EMAIL_NOT_FOUND':
                errorMessage = 'This email does not exist.';
                break;
            case 'INVALID_PASSWORD':
                errorMessage = 'This password is not correct.';
                break;
        }
        return throwError(errorMessage);
    }
    signUp(content) {
        this.http.post(environment.BASEURL + 'auth-users', content).subscribe((res) => {
            console.log(res);
        });
    }
    googleOAuth() {
        this.document.location.href = environment.BASEURL + 'auth/google';
    }
    token() {
        console.log(this.response);
    }
};
AuthService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __param(1, Inject(DOCUMENT))
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map