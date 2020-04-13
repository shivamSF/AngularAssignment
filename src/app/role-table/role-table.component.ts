import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-role-table',
  templateUrl: './role-table.component.html',
  styleUrls: ['./role-table.component.css']
})
export class RoleTableComponent implements OnInit {
  roles;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get("http://localhost:5000/gettable/getRoles").subscribe(data => {
    this.roles = data;
  });
  }

}
