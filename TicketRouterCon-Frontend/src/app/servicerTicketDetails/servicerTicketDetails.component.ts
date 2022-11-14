import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ShowServicerTicketDetails } from '../_models/showServicerTicketDetails';
import { ServicerService } from '../_services/servicer.service';


@Component({
  selector: 'app-servicerTicketDetails',
  templateUrl: './servicerTicketDetails.component.html',
  styleUrls: ['./servicerTicketDetails.component.css']
  
})
export class  ServicerTicketDetailsComponent implements OnInit {
  servicerTicketDetails:ShowServicerTicketDetails=new ShowServicerTicketDetails();
  isUpdated = false;
  isUpdatedFailed = false;

  constructor(private servicerService: ServicerService, private router:Router) { }

  ngOnInit(): void {
    this.servicerTicketDetails = history.state;
  }

  onSubmit(){
    this.servicerService.updateServicerStatus(this.servicerTicketDetails).subscribe(
      data => {
        this.isUpdated = true;
        this.isUpdatedFailed = false;
        this.router.navigate(['servicerViewAllTicket']);
      },
      (_error:Response)=>{
        if(_error.status===404||_error.status===500)
        document.getElementById("error").innerHTML="Invalid data";
      });
  }
}