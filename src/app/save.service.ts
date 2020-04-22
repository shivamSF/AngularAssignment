import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SaveService {
  constructor(private http:HttpClient, private router :Router) { }
  saveUsers(user, userId){
   this.http.patch(`http://localhost:3000/users/${userId}`,user).subscribe(resp => {
   });
  }
  saveCustomers(customer, customerId){
    this.http.patch(`http://localhost:3000/customers/${customerId}`,customer).subscribe(resp => {
    }); 
  }
  addUser(user){
    this.http.post('http://localhost:3000/users', user).subscribe(resp =>{});
  }
  addCustomer(customer){
    this.http.post('http://localhost:3000/customers', customer).subscribe(resp =>{});
  }
}
