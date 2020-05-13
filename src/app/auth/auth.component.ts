import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  title : string
  isLogin : boolean= true
  isLoading = false;
  constructor(private route :ActivatedRoute,
    private authService :AuthService,
    private router :Router) { }

  ngOnInit(): void {
    this.title = this.route.snapshot.paramMap.get('title');
    if(this.title === 'login'){
      this.isLogin = true;
    }
    else if (this.title === 'signUp'){
      this.isLogin = false;
    }

  }
  async onLogin(form:NgForm){
    this.isLoading = true;
   this.authService.login(form.value).subscribe(()=>{
     this.isLoading =false;
     this.router.navigate(['/'])
   },error=>{
     console.log(error)
     this.isLoading =false;
   });
   form.reset();
  }
  onSignUp(form:NgForm){
    this.authService.signUp(form.value)
  }
  toggle(content){
    this.router.navigateByUrl("/refresh",{skipLocationChange:true}).then(() => {
      this.router.navigate(['userAuthentication', {title: content}]);
    });
  }
  onGoogleOAuth(){
    this.authService.googleOAuth();
  }

}
