import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { CustomerService } from '../_services/customer.service';
import { TicketStatusDetails } from '../_models/ticketStatusDetails';


@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
  
})
export class StatusComponent implements OnInit {
  form: any = {
    ticketNum: null};
    username:string=null;
    ticketStatusDetails:TicketStatusDetails=new TicketStatusDetails();


  constructor(private customerService: CustomerService, private router:Router) { }

  ngOnInit(): void {
  
  }
  
    onSubmit(): void {
      const { ticketNum} = this.form;
  
      this.customerService.showStatus(ticketNum)
      .subscribe(
        data => {
          localStorage.setItem('ticketNum',this.form.ticketNum)
          let ticket=localStorage.getItem('ticketNum')
          console.log(ticket)
          console.log('response Recived')
          this.ticketStatusDetails=data;
          console.log(data)
          this.router.navigateByUrl('/ticketDetails',{state:this.ticketStatusDetails});
          
        },
        (_error:Response)=>{
          if(_error.status===404 ||_error.status===500 )
          document.getElementById("error").innerHTML="Invalid data";
        });
    }
}