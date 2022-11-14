import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { from, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ProfileData } from '../_models/profileData';
import { User } from '../_models/user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl:string = "http://localhost:8080/";
 

  constructor(private httpClient: HttpClient) { 
 
  }

  loginUser(user:User):Observable<object>{
    console.log(user)
    return this.httpClient.post(this.baseUrl+'login',user);
  }

    customerRegister(username: string,password: string,name: string, alias:string, designation: string,department: string,email: string,mobile: string): Observable<any> {
      return this.httpClient.post(this.baseUrl+ 'customerRegister', {
        username,
        password,
        name,
        alias,
        designation,
        department,
        email,
        mobile
      }, httpOptions);
    }
    
  
    servicerRegister(username: string,password: string,name: string,email: string,mobile: string,groupId:string, location: string): Observable<any> {
      return this.httpClient.post(this.baseUrl + 'servicerRegister', {
        username,
        password,
        name,
        email,
        mobile,
        groupId,
        location
      }, httpOptions);
    }

    userDetails():Observable<ProfileData>{
      let name=localStorage.getItem('username')
      console.log(name)
      let usertype=localStorage.getItem('userType')
      console.log(usertype)
      const params = new HttpParams()
      .set('username',name)
      .set('userType',usertype);
      console.log(params)
      return this.httpClient.get<ProfileData>(this.baseUrl + 'getUserDetails', {'params':params}).
      pipe(
         map((data) => {
           return data;
         }), catchError( error => {
           return throwError( 'Something went wrong!' );
         })
      ) 
    }

    updateUserData(profileData:ProfileData):Observable<ProfileData>{
      let name=localStorage.getItem('username')
      console.log(name)
      let usertype=localStorage.getItem('userType')
      console.log(usertype)
      const params = new HttpParams()
      .set('username',name)
      .set('userType',usertype);
      console.log(profileData)
      console.log(params)
      return this.httpClient.post<ProfileData>(this.baseUrl + 'profile',profileData, {'params':params}).
      pipe(
         map((data) => {
           return data;
         }), catchError( error => {
           return throwError( 'Something went wrong!' );
         })
      ) 
    }
  
  }
 




