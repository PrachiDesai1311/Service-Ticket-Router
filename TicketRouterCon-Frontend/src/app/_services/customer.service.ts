import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from '../_models/ticket';
import { TicketDetails} from '../_models/ticketDetails';
import { from, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import {TicketStatusDetails} from '../_models/ticketStatusDetails';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseUrl:string = "http://localhost:8080/";

  constructor(private httpClient: HttpClient) { }

    newTicket(ticket:Ticket): Observable<Object> {
        console.log(ticket)
        let name=localStorage.getItem('username')
        console.log(name)
        ticket.username=name
        return this.httpClient.post(this.baseUrl+'newTicket',ticket);
    }

    viewAllTicket() :Observable<TicketDetails[]>{
      let name=localStorage.getItem('username')
      console.log(name)
      const params = new HttpParams()
     .set('username',name);
      return this.httpClient.get<TicketDetails[]>(this.baseUrl + 'viewAllTicket',{'params':params}).
          pipe(
             map((data) => {
               return data;
             }), catchError( error => {
               return throwError( 'Something went wrong!' );
             })
          )
      }

      showStatus(ticketNum:string): Observable<TicketStatusDetails> {
        let name=localStorage.getItem('username')
        console.log(name)
        console.log(ticketNum)
        const params = new HttpParams()
        .set('ticketNum',ticketNum)
        .set('username',name);
        console.log(params)
        return this.httpClient.get<TicketStatusDetails>(this.baseUrl + 'ticketdetails', {'params':params})
      }


        updateStatus(ticketStatusDetails:TicketStatusDetails): Observable<Object> {
          return this.httpClient.post(this.baseUrl + 'updateDetails',ticketStatusDetails)
        }


        
  }
 




