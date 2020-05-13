import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
import { take, exhaustMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TransferService {
  customerId
  user:{
    code:string
  }
  constructor(private http: HttpClient,
    private authService:AuthService) { }
  getUsers(){
    return this.http.get(environment.usersUrl)
  }
  getRoles(){
      return this.http.get(environment.rolesUrl)
    
  }
  getCustomers(){
    return this.authService.user.pipe(take(1),exhaustMap(user => {

      return this.http.get(environment.customersUrl,{
        headers: new HttpHeaders({
          "Authorization": `Bearer ${user.token}` 
        })
      })
    }));
  }
  getUsersPerCustomer(customerId){
    this.customerId = customerId;
  }
  returnUsersPerCustomers(){
    return this.http.get(environment.customersUrl+'/'+this.customerId+`/users`)
  }
  returnSingleCustomer(){
    return this.http.get(environment.customersUrl+'/'+this.customerId)
  }
}
