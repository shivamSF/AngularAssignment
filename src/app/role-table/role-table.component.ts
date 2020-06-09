import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TransferService } from '../transfer.service';

@Component({
  selector: 'app-role-table',
  templateUrl: './role-table.component.html',
  styleUrls: ['./role-table.component.css']
})
export class RoleTableComponent implements OnInit {
  roles;
  constructor(private http:HttpClient,
    private transferService:TransferService
    ) { }

  ngOnInit(): void {
    this.transferService.getRoles().subscribe(data => {
    this.roles = data;
  });
  }

}
