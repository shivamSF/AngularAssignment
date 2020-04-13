import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SaveService {
  constructor(private http:HttpClient, private router :Router) { }
  saveUsers(user, userId){
   this.http.post(`http://localhost:5000/CUops/updateUser/${userId}`,user).subscribe(resp => {
   });
  }
  saveCustomers(customer, customerId){
    this.http.post(`http://localhost:5000/CUops/updateCustomer/${customerId}`,customer).subscribe(resp => {
    }); 
  }
  addUser(user){
    this.http.post('http://localhost:5000/CUops/addUser', user).subscribe(resp =>{});
  }
}
