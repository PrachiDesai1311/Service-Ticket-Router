import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Ticket} from '../_models/ticket';
import { CustomerService } from '../_services/customer.service';

@Component({
  selector: 'app-newTicket',
  templateUrl: './newTicket.component.html',
  styleUrls: ['./newTicket.component.css']
})
export class NewTicketComponent implements OnInit {

  ticket:Ticket= new Ticket();
  
  constructor(private router: Router, private customerService: CustomerService) { 

  }
ur:any;
  ngOnInit(): void {
  }
 onNewTicket():void{
  this.customerService.newTicket(this.ticket).subscribe(
    _data => {
      let a:any = _data
      localStorage.setItem('token',JSON.stringify(a))
      this.router.navigate(['viewAllTicket']);
    },
    (_error:any)=>{
      document.getElementById("error").innerHTML="Invalid data";
    });
 }
  
}
  

  
