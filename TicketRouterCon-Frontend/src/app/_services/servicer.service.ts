import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from '../_models/ticket';
import { TicketDetails} from '../_models/ticketDetails';
import { from, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
//import { ShowTicketDetails } from '../_models/ticketStatusDetails';
import { ShowServicerTicketDetails } from '../_models/showServicerTicketDetails';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class ServicerService {

  private baseUrl:string = "http://localhost:8080/";

  constructor(private httpClient: HttpClient) { }

    servicerViewAllTicket() :Observable<TicketDetails[]>{
      let name=localStorage.getItem('username')
      console.log(name)
      const params = new HttpParams()
     .set('username',name);
      return this.httpClient.get<TicketDetails[]>(this.baseUrl + 'servicerViewAllTicket',{'params':params}).
          pipe(
             map((data) => {
               return data;
             }), catchError( error => {
               return throwError( 'Something went wrong!' );
             })
          )
      }

      showServicerStatus(ticketNum:string): Observable<ShowServicerTicketDetails> {
        let name=localStorage.getItem('username')
        console.log(name)
        console.log(ticketNum)
        const params = new HttpParams()
        .set('ticketNum',ticketNum)
        .set('username',name);
        console.log(params)
        return this.httpClient.get<ShowServicerTicketDetails>(this.baseUrl + 'servicerTicketDetails', {'params':params})
      }
    

        updateServicerStatus(servicerTicketDetails:ShowServicerTicketDetails): Observable<Object> {
          let statusticket=servicerTicketDetails.status
          let comment =servicerTicketDetails.servicerComment
          let ticket=servicerTicketDetails.ticketNum
          const params = new HttpParams()
          .set('ticketStatus',statusticket)
          .set('servicerComment',comment)
          .set('ticketNum',ticket);
          console.log(params)
          return this.httpClient.get(this.baseUrl + 'updateServicerDetails',{'params':params})
        }

  }
 