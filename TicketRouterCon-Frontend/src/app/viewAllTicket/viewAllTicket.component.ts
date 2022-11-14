import { Component, Input, OnInit } from '@angular/core';
import { TicketDetails } from '../_models/ticketDetails';
import { CustomerService } from '../_services/customer.service';


@Component({
  selector: 'app-viewAllTicket',
  templateUrl: './viewAllTicket.component.html',
  styleUrls: ['./viewAllTicket.component.css']
})
export class ViewAllTicketComponent implements OnInit {

  TicketDetails : TicketDetails[];
  constructor(private customerService:CustomerService) { }

  ngOnInit(): void {
    this.viewAll();
  }
   
 viewAll(){
  this.customerService.viewAllTicket()
      .subscribe(
        (data) => {                           
          console.log('response received')
          this.TicketDetails = data; 
        },
        (_error:any)=>{
          document.getElementById("error").innerHTML="No tickets to display";
        })
  }
}


  

  
