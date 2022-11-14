
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './_models/user';
import { AuthService } from './_services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TicketRouter-frontend';

constructor(private router:Router,private authService:AuthService){
 
}

 a:any
  ngOnInit() {
    if(!localStorage.getItem('token'))
    {
        this.router.navigate(['/login']); 
    }
  }
}
