import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SaveService {
  constructor(private http:HttpClient, private router :Router) { }
  saveUsers(user, userId){
   this.http.patch(environment.usersUrl+`/${userId}`,user).subscribe(resp => {
   });
  }
  saveCustomers(customer, customerId){
    this.http.patch(environment.customersUrl+`/${customerId}`,customer).subscribe(resp => {
    }); 
  }
  addUser(user){
    this.http.post(environment.usersUrl, user).subscribe(resp =>{});
  }
  addCustomer(customer){
    this.http.post(environment.customersUrl, customer).subscribe(resp =>{});
  }
}
