import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  constructor(private http:HttpClient) { }
  deleteUser(userId){
    this.http.delete(`http://localhost:3000/users/${userId}`).subscribe( data =>{});
  }
  deleteCustomer(customerId){
    this.http.delete(`http://localhost:3000/customers/${customerId}`).subscribe( data =>{});
  }
  }

