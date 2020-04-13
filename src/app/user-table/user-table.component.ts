import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { SaveService } from '../save.service';
import { Router } from '@angular/router';
import { Location } from "@angular/common";
import { DeleteService } from '../delete.service';
import { TransferService } from '../transfer.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit{
  userData;
  isClicked = false;
  userId;
  roles;
  customers;
  selectedRole;
  selectedCustomers;
  constructor(private http :HttpClient,
     private saveService:SaveService, 
     private route:Router ,
     private location:Location,
     private deleteService:DeleteService,
     private transferService:TransferService
     ) { }

  ngOnInit(): void {
   this.http.get("http://localhost:5000/getTable/getusers").subscribe(data => {
     this.userData = data;
     this.isClicked = false;
   });
   this.http.get("http://localhost:5000/gettable/getRoles").subscribe(data => {
     this.roles = data;
     this.transferService.getRoles(data);
    });
    this.http.get("http://localhost:5000/getTable/getCustomers").subscribe(data => {
     this.customers = data;
     this.transferService.getCustomers(data)
   })
   
  }
  checkCondition(userId){
    if(this.isClicked && this.userId == userId){
      return true;
    }
    else{
      return false;
    }
  }
  onEdit(userId, roleId ,customerId){
    this.isClicked = true;
    this.userId = userId;
    this.selectedRole = roleId;
    this.selectedCustomers = customerId;

  }
  onDelete(userId){
    this.deleteService.deleteUser(userId);
    this.onRefresh();
  }
  async onSave(form:NgForm){
    this.saveService.saveUsers(form.value, this.userId)
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
