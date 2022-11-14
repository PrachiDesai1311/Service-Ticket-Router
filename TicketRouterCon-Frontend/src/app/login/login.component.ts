import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { User } from '../_models/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User= new User();
  value:string='';
  
  constructor(private authService: AuthService,
    private router:Router){ 
    }
  ngOnInit(): void { 
  }

  userLogin(){
   
    this.authService.loginUser(this.user).subscribe(
      _data => {
      let a:any = _data
      localStorage.setItem('username',this.user.username)
      let name=localStorage.getItem('username')
      localStorage.setItem('userType',this.user.userType)
      let usertype=localStorage.getItem('userType')
      console.log(name)
      console.log(usertype)
      this.value=(<HTMLInputElement>document.getElementById("userType")).value;
      if(this.value=='Customer')
      {
      this.router.navigate(['newTicket']);
      }
      else
      {
        this.router.navigate(['servicerTicketStatus']);
      }
      },
    (_error:any)=>{
      document.getElementById("error").innerHTML="Invalid credentials";
    });
  }
  
}
