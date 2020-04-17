import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { SaveService } from '../save.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { DeleteService } from '../delete.service';

@Component({
  selector: 'app-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.css']
})
export class CustomerTableComponent implements OnInit {
  customerData;
  isClicked =false;
  customerId
  constructor(private http :HttpClient,
    private saveService:SaveService,
    private route:Router,
    private location:Location,
    private deleteService:DeleteService) { }

  ngOnInit(): void {
    this.http.get("http://localhost:5000/getData/getCustomers").subscribe(data => {
     this.customerData = data;
   })
  }
  checkCondition(customerId){
    if(this.isClicked && this.customerId == customerId){
      return true;
    }
    else{
      return false;
    }
  }
  onEdit(customerId){
    this.isClicked = true;
    this.customerId = customerId;

  }
  onDelete(customerId){
    this.deleteService.deleteCustomer(customerId);
    this.onRefresh();
  }
  onSave(form:NgForm){
    this.saveService.saveCustomers(form.value, this.customerId)
    this.onRefresh();

   }
   onCancel(){
    this.isClicked=false;
  } 
  onRefresh(){
    this.route.navigateByUrl("/refresh",{skipLocationChange:true}).then(() => {
      this.route.navigate([decodeURI(this.location.path())]);
    });
  }
}
