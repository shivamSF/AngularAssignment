import { Component, OnInit, OnDestroy} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { SaveService } from '../save.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from "@angular/common";
import { DeleteService } from '../delete.service';
import { TransferService } from '../transfer.service';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit, OnDestroy{
  userData;
  isClicked = false;
  userId;
  roles;
  customers;
  singleCustomer;
  selectedRole;
  singleRole;
  selectedCustomers;
  isUserPerCustomer = false;
  userSub: Subscription;
  isAuthenticated: boolean=false;
  constructor(private http :HttpClient,
     private saveService:SaveService, 
     private route:Router ,
     private location:Location,
     private deleteService:DeleteService,
     private transferService:TransferService,
     private activeRoute: ActivatedRoute,
     private authService: AuthService
     ) { }

  ngOnInit(): void {
      this.userSub = (this.authService.user).subscribe((user) =>{
      this.isAuthenticated = !!user;
     }); 
     this.onLoad();
  }
  onLoad(){
    let pathName= this.activeRoute.snapshot.routeConfig.path;
    if(pathName == 'usersPerCustomer'){
      this.isUserPerCustomer = true;
      this.transferService.returnUsersPerCustomers().subscribe(data => {
        this.userData = data;
      })
      this.transferService.returnSingleCustomer().subscribe(data => {
        this.singleCustomer = data;
      })
    }
    else{
   this.transferService.getUsers().subscribe(data => {
     this.userData = data;
   });
  }
   this.transferService.getRoles().subscribe(data => {
     this.roles = data;
    });
    this.transferService.getCustomers().subscribe(data => {
     this.customers = data;
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
  onEdit(userId, roleId ,CustomerId){
    this.isClicked = true;
    this.userId = userId;
    this.selectedRole = roleId;
    this.selectedCustomers = CustomerId;

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
  ngOnDestroy(){
    this.userSub.unsubscribe()
  }
}
