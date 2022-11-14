import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { CustomerService } from '../_services/customer.service';
import { TicketStatusDetails } from '../_models/ticketStatusDetails';


@Component({
  selector: 'app-ticketDetails',
  templateUrl: './ticketDetails.component.html',
  styleUrls: ['./ticketDetails.component.css']
  
})
export class  TicketDetailsComponent implements OnInit {
  ticketStatusDetails:TicketStatusDetails=new TicketStatusDetails();
  isUpdated = false;
  isUpdatedFailed = false;


  constructor(private customerService: CustomerService, private router:Router) { 

  }

  ngOnInit(): void {
    this.ticketStatusDetails = history.state;
  }

  onSubmit(){
    console.log(this.ticketStatusDetails.status)
    this.customerService.updateStatus(this.ticketStatusDetails).subscribe(
      data => {
        console.log(data);
        this.isUpdated = true;
        this.isUpdatedFailed = false;
        this.router.navigate(['viewAllTicket']);
      },
      (_error:Response)=>{
        if(_error.status===404 ||_error.status===500)
        document.getElementById("error").innerHTML="Invalid data";
      });
  }
  }

