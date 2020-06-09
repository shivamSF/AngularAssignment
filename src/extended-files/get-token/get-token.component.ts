import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { TransferService } from 'src/app/transfer.service';
import { AuthService, AuthResponseData } from 'src/app/auth.service';
@Component({
  selector: 'app-get-token',
  templateUrl: './get-token.component.html',
  styleUrls: ['./get-token.component.css']
})
export class GetTokenComponent implements OnInit {
 user : AuthResponseData
  constructor(private route :Router,
    private actRoute: ActivatedRoute,
    private authService : AuthService,){}

  ngOnInit(): void {
    this.user = this.actRoute.snapshot.queryParams as AuthResponseData
    if(!this.user){
      this.navigate()
    }
    this.authService.handleAuthentication(this.user.email,this.user.authProvider,this.user.code,+this.user.expiresIn)
    this.navigate()
  }
  navigate(){
    this.route.navigate(['/'])
  }
}
