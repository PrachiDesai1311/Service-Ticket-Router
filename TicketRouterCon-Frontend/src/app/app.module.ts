import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { NewTicketComponent } from './newTicket/newTicket.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavsideserComponent } from './navsideser/navsideser.component';
import { ProfileComponent } from './profile/profile.component';
import { Router, RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NavsideComponent } from './navside/navside.component';
import { StatusComponent } from './status/status.component';
import { ViewAllTicketComponent } from './viewAllTicket/viewAllTicket.component';
import {SignupComponent } from './signup/signup.component';
import {CustomerRegisterComponent } from './customerRegister/customerRegister.component';
import {ServicerRegisterComponent } from './servicerRegister/servicerRegister.component';
import {TicketDetailsComponent } from './ticketDetails/ticketDetails.component';
import { ServicerTicketStatusComponent } from './servicerTicketStatus/servicerTicketStatus.component';
import {ServicerTicketDetailsComponent } from './servicerTicketDetails/ServicerTicketDetails.component';
import {ServicerViewAllTicketComponent } from './servicerViewAllTicket/servicerViewAllTicket.component';

@NgModule({
  declarations: [
    AppComponent,
    NewTicketComponent,
    NavbarComponent,
    LoginComponent,
    NavsideComponent,
    ProfileComponent,
    SignupComponent,
    CustomerRegisterComponent,
    ServicerRegisterComponent,
    TicketDetailsComponent,
    NavsideserComponent,
    ViewAllTicketComponent,
    ServicerTicketStatusComponent,
    ServicerTicketDetailsComponent,
    ServicerViewAllTicketComponent,
    StatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatSidenavModule,
    MatToolbarModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [NavbarComponent],
  bootstrap: [AppComponent],

  
})
export class AppModule { }
