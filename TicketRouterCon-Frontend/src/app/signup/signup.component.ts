import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AuthService } from '../_services/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
  
})
export class SignupComponent implements OnInit {
  loc:string='';

  constructor(private router:Router) { }

  ngOnInit(): void {
  
  }

  onNavigate(loc:String){
    if(loc==='1'){
      this.router.navigate(['customerRegister']);
    }
    else{
      this.router.navigate(['servicerRegister']);
    }
  }
}