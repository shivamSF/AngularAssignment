import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit , OnDestroy{
  private userSub : Subscription;
  isAuthenticated = false;
  constructor(private router:Router,
    private authService:AuthService) { }

  ngOnInit(): void {
    this.userSub = (this.authService.user).subscribe((user) =>{
      this.isAuthenticated = !!user;
     });
    
  }
  
  onLoad(content:string){
    if (content=='USERS-TABLE'){
    this.router.navigate(['usersTable'])
    }
    else if(content == 'CUSTOMERS-TABLE'){
      this.router.navigate(['customersTable'])
    }
    else {
      this.router.navigate(['rolesTable'])
    }
  }
  onAuth(content){
    this.router.navigate(['userAuthentication', { title : content}])
  }
  ngOnDestroy(){
    this.userSub.unsubscribe()
  }
}
