import { Component, Input, OnInit } from '@angular/core';
import { TicketDetails } from '../_models/ticketDetails';
import { ServicerService } from '../_services/servicer.service';


@Component({
  selector: 'app-serviverViewAllTicket',
  templateUrl: './servicerViewAllTicket.component.html',
  styleUrls: ['./servicerViewAllTicket.component.css']
})
export class ServicerViewAllTicketComponent implements OnInit {

  ServicerTicketDetails : TicketDetails[];
  constructor(private servicerService:ServicerService) { }

  ngOnInit(): void {
    this.servicerViewAll();
  }
   
 servicerViewAll(){
  this.servicerService.servicerViewAllTicket()
      .subscribe(
        (data) => {                          
          console.log('response received')
          this.ServicerTicketDetails = data; 
        },
        (_error:any)=>{
          document.getElementById("error").innerHTML="No tickets to display";
        })
  }
}


  

  
