import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferService {
  customers;
  roles;
  constructor() { }
  getCustomers(customers){
  this.customers=customers;
  }
  getRoles(roles){
    this.roles =  roles;
  }
  returnCustomers(){
    return this.customers;
  }
  returnRoles(){
    return this.roles;
  }
}
