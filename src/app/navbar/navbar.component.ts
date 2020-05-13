import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  pageName:string;
  otherPage1:string;
  otherPage1Link:string;
  otherPage2:string;
  otherPage2Link:string;
  otherPage3:string;
  otherPage3Link:string;
  userSub: Subscription;
  userEmail
  title
  isAuthenticated= false;
  constructor(private route :ActivatedRoute,
    private authService:AuthService) { }

  ngOnInit(): void {
    this.userSub = (this.authService.user).subscribe((user) =>{
      this.isAuthenticated = !!user;
      this.userEmail = user.email;
     });
     this.onLoad()
  }
onLoad(){
  this.title = this.route.snapshot.paramMap.get('title');
  let pathName =this.route.snapshot.routeConfig.path;
    if(pathName=='usersTable'){
    this.pageName ="Users Table";
    this.otherPage1 ="Customers Table";
    this.otherPage1Link = "customersTable";
    this.otherPage2 = "Roles Table";
    this.otherPage2Link = "rolesTable";
  }
  else if(pathName == 'customersTable'){
    this.pageName ="Customers Table";
  this.otherPage1 ="Users Table";
  this.otherPage1Link = "usersTable";
  this.otherPage2 = "Roles Table";
  this.otherPage2Link = "rolesTable";
  }
  else if(pathName == 'usersPerCustomer'){
    this.pageName ="Users By Customer"
    this.otherPage1 ="Customers Table";
    this.otherPage1Link = "customersTable";
    this.otherPage2 = "Roles Table";
    this.otherPage2Link = "rolesTable";
    this.otherPage3 = 'Users Table';
    this.otherPage3Link = "usersTable"
  }
  else  if(pathName == 'rolesTable'){
    this.pageName ="Roles Table";
    this.otherPage1 ="Users Table";
    this.otherPage1Link = "usersTable";
    this.otherPage2 = "Customers table";
    this.otherPage2Link = "customersTable";
  }
  else if(this.title == 'signUp'){
    this.pageName = "Sign Up"
  }
  else{
    this.pageName = "Login"
  }
}
onLogout(){
  this.authService.logout();
}
 
}
