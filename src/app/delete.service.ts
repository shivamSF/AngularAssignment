import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  constructor(private http:HttpClient) { }
  deleteUser(userId){
    this.http.get(`http://localhost:5000/deleteData/deleteUser/${userId}`).subscribe( data =>{});
  }
  deleteCustomer(customerId){
    this.http.get(`http://localhost:5000/deleteRow/deleteCustomer/${customerId}`).subscribe( data =>{});
  }
  }

