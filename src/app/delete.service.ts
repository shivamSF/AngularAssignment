import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  constructor(private http:HttpClient) { }
  deleteUser(userId){
    this.http.delete(environment.usersUrl +`/${userId}`).subscribe( data =>{});
  }
  deleteCustomer(customerId){
    this.http.delete(environment.customersUrl +`/${customerId}`).subscribe( data =>{});
  }
  }

