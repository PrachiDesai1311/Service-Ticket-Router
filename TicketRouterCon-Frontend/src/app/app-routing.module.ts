import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewTicketComponent } from './newTicket/newTicket.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavsideComponent } from './navside/navside.component';
import { NavsideserComponent } from './navsideser/navsideser.component';
import { ProfileComponent } from './profile/profile.component';
import { ViewAllTicketComponent } from './viewAllTicket/viewAllTicket.component';
import {CustomerRegisterComponent } from './customerRegister/customerRegister.component';
import {ServicerRegisterComponent } from './servicerRegister/servicerRegister.component';
import {ServicerTicketStatusComponent } from './servicerTicketStatus/servicerTicketStatus.component';
import {StatusComponent } from './status/status.component';
import {TicketDetailsComponent } from './ticketDetails/ticketDetails.component';
import {ServicerTicketDetailsComponent } from './servicerTicketDetails/ServicerTicketDetails.component';
import {SignupComponent } from './signup/signup.component';
import {ServicerViewAllTicketComponent } from './servicerViewAllTicket/servicerViewAllTicket.component';


const routes: Routes = [
  {path:'',redirectTo: '/login',pathMatch:'full'},
  {path: 'login', component: LoginComponent},
  {path: 'newTicket', component: NewTicketComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'navside', component: NavsideComponent},
  {path: 'navsideser', component: NavsideserComponent},
  {path: 'profile', component: ProfileComponent},
  {path:'viewAllTicket', component:ViewAllTicketComponent},
  {path:'servicerTicketStatus', component:ServicerTicketStatusComponent},
  {path:'logout', component:LoginComponent},
  {path:'status', component:StatusComponent},
  {path:'signup', component:SignupComponent},
  {path:'customerRegister', component:CustomerRegisterComponent},
  {path:'servicerRegister', component:ServicerRegisterComponent},
  {path:'ticketDetails', component:TicketDetailsComponent},
  {path:'servicerTicketDetails', component:ServicerTicketDetailsComponent},
  {path:'servicerViewAllTicket', component:ServicerViewAllTicketComponent},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
