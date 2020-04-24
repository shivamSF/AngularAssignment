import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransferService {
  customerId
  constructor(private http: HttpClient) { }
  getUsers(){
    return this.http.get(environment.usersUrl)
  }
  getRoles(){
    return this.http.get(environment.rolesUrl)
  }
  getCustomers(){
    return this.http.get(environment.customersUrl)
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
