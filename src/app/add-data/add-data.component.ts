import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { TransferService } from '../transfer.service';
import { SaveService } from '../save.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {
  btnName;
  pathName;
  customers;
  roles;
  initialSelect = "--SELECT"
  addUser= false;
  isClicked = false;
  constructor(private route :ActivatedRoute, 
    private transferService:TransferService,
    private saveService:SaveService,
    private router:Router,
    private location:Location) { }

  ngOnInit(): void {
    this.pathName =this.route.snapshot.routeConfig.path;
   
    if(this.pathName=='usersTable'){
      this.btnName='ADD USER'

    }
    else{
      this.btnName='ADD CUSTOMER'
    }
  }
  onClick(){
    this.isClicked= true;
    this.customers =this.transferService.returnCustomers();
    this.roles = this.transferService.returnRoles();

  if(this.pathName=='usersTable'){
    this.addUser=true;
  }
  else{
    this.addUser = false;
  }
}
onSave(form:NgForm){
  if(this.addUser){
this.saveService.addUser(form.value);
 }
  else{
    this.saveService.addCustomer(form.value)
  }
  this.router.navigateByUrl("/refresh",{skipLocationChange:true}).then(() => {
    this.router.navigate([decodeURI(this.location.path())]);
  });
}
onCancel(){
  this.isClicked = false;
}
}
