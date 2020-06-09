import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { DOCUMENT } from '@angular/common';
import { throwError, BehaviorSubject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from './auth/user.model';
import { Router } from '@angular/router';

export interface AuthResponseData {
  authProvider: string;
  code: string;
  email: string;
  expiresIn: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user = new BehaviorSubject<User>(null);
  tokenTimer

  constructor(private http :HttpClient,
    @Inject(DOCUMENT)  private document :Document,
    private route :Router
    ) { }

    autoLogin(){
     const userData= JSON.parse(localStorage.getItem('userData'))
     if(!userData){
       return
     }
     const retrievedUser = new User(userData.email, userData.authProvider, userData._token,new Date(userData._tokenExpirationDate) )
     if(retrievedUser.token){
       this.user.next(retrievedUser)
       const expiresIn = new Date(userData._tokenExpirationDate).getTime()-new Date().getTime()
       this.autoLogout(expiresIn)
     }
    }

  login(content){
  return  this.http.post<AuthResponseData>(environment.BASEURL+'auth/login', content)
  .pipe(
      catchError(this.handleError),
      tap(resData => {
        this.handleAuthentication(
          resData.email,
          resData.authProvider,
          resData.code,
          +resData.expiresIn
        );
      })
    );
  }
   handleAuthentication(
    email: string,
    authProvider: string,
    token: string,
    expiresIn: number,
  ) {
    const expirationDate = new Date(new Date().getTime() + expiresIn);
    const user = new User(email, authProvider, token, expirationDate)
    this.user.next(user)
    this.autoLogout(expiresIn * 1000)
    localStorage.setItem('userData', JSON.stringify(user));
  }

  private handleError(errorRes: HttpErrorResponse) {
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
  signUp(content){
    this.http.post(environment.BASEURL+'auth-users', content).subscribe((res)=>{
      console.log(res)
    })
  }
  googleOAuth(){
    this.document.location.href = environment.BASEURL+'auth/google'
  }
  logout(){
    this.user.next(null)
    this.route.navigate(['userAuthentication', { title : 'login'}])
    localStorage.clear();
    // or local storage remove item can be used
    if(this.tokenTimer){
      clearTimeout(this.tokenTimer)
    }
    this.tokenTimer = null;
  }
  autoLogout(expirationtime: number){
    this.tokenTimer = setTimeout(()=>{
      this.logout();
    }, expirationtime)
  }

  
}
