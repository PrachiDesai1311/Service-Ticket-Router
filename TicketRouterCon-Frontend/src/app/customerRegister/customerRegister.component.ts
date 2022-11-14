import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customerRegister',
  templateUrl: './customerRegister.component.html',
  styleUrls: ['./customerRegister.component.css']
})
export class CustomerRegisterComponent implements OnInit {

     form: any = {
      username: null,
      password: null,
      name: null,
      alias: null,
      designation:null,
      department:null,
      email: null,
      mobile:null
    };
    isSuccessful = false;
    isSignUpFailed = false;
   
    constructor(private authService: AuthService,private router:Router) { }
  
    ngOnInit(): void {
    }
  
    onSubmit(): void {
      const { username, password,name,alias,designation,department,email,mobile } = this.form;
  
      this.authService.customerRegister(username,password,name,alias,designation,department,email,mobile).subscribe(
        data => {
          console.log(data);
          this.isSuccessful = true;
          this.isSignUpFailed = false;
          this.router.navigate(['login']);
        },
        (_error:Response)=>{
          if(_error.status===400)
          document.getElementById("error").innerHTML="Invalid data";
        }
      );
    }
  }

