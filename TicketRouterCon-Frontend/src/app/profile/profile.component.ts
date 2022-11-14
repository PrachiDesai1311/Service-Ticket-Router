import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';
import { ProfileData } from '../_models/profileData';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    profileData:ProfileData= new ProfileData();
    isUpdated = false;
    isUpdatedFailed = false;
    textDisabled=true;
    
  
    constructor(private authService: AuthService,private router:Router) { }
  
    ngOnInit(): void {
      this.authService.userDetails().subscribe(
        data => {
          console.log(data);
          this.profileData=data;
        });
    }

    changeEditable(){
      console.log('changeEditable')
      this.textDisabled=!this.textDisabled;
    }
    
    onSubmit(): void {
      this.authService.updateUserData(this.profileData).subscribe(
        data => {
          console.log(data);
          this.isUpdated = true;
          this.isUpdatedFailed = false;
          this.router.navigate(['profile']);
        },
        (_error:any)=>{
          document.getElementById("error").innerHTML="Invalid data";
        }
      );
  }

}