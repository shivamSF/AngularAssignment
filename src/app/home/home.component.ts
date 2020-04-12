import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
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
}
