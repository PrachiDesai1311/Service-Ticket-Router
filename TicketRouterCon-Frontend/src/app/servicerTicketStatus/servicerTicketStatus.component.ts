import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ServicerService } from '../_services/servicer.service';
import { ShowServicerTicketDetails } from '../_models/showServicerTicketDetails';


@Component({
  selector: 'app-servicerTicketStatus',
  templateUrl: './servicerTicketStatus.component.html',
  styleUrls: ['./servicerTicketStatus.component.css']
  
})
export class ServicerTicketStatusComponent implements OnInit {
  form: any = {
    ticketNum: null
  };
    servicerTicketDetails:ShowServicerTicketDetails=new ShowServicerTicketDetails();

  constructor(private servicerService: ServicerService, private router:Router) { }

  ngOnInit(): void {
  
  }

  onSubmit(){
    const { ticketNum} = this.form;
  
      this.servicerService.showServicerStatus(ticketNum)
      .subscribe(
        data => {
          localStorage.setItem('ticketNum',this.form.ticketNum)
          let ticket=localStorage.getItem('ticketNum')
          console.log(ticket)
          console.log('response Recived')
          this.servicerTicketDetails=data;
          console.log(data)
          this.router.navigateByUrl('/servicerTicketDetails',{state:this.servicerTicketDetails});
          
        },
        (_error:Response)=>{
          if(_error.status===404 ||_error.status===500)
          document.getElementById("error").innerHTML="Invalid Data";
        });
    }
}