import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-servicerRegister',
  templateUrl: './servicerRegister.component.html',
  styleUrls: ['./servicerRegister.component.css']
})
export class ServicerRegisterComponent implements OnInit {

    form: any = {
      username: null,
      password: null,
      name: null,
      email: null,
      mobile:null,
      groupId: null,
      location:null,
    };
    isSuccessful = false;
    isSignUpFailed = false;
    errorMessage = '';
  
    constructor(private authService: AuthService,private router:Router) { }
  
    ngOnInit(): void {
    }
  
    onSubmit(): void {
      const { username, password,name,email,mobile,groupId,location} = this.form;
  
      this.authService.servicerRegister(username,password,name,email,mobile,groupId,location).subscribe(
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
