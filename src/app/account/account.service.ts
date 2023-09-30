import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject, Observable, map} from "rxjs";
import { environment } from 'src/environments/environment';
import { IRegisterUser, ILoginUser } from '../shared/models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
baseUrl = environment.apiUrl;
private currentUserSource = new BehaviorSubject<ILoginUser>(null);
currentUser$ = this.currentUserSource.asObservable();

  constructor(private http:HttpClient, private router: Router) { }

  getCurrentUserValue(){
    return this.currentUserSource.value;
  }

  loadCurrentUser(token: string){
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);
    console.log(headers);
  
    return this.http.get(this.baseUrl + 'Account', { headers }).pipe(
      map((user: ILoginUser) => {
        if (user) {
          localStorage.setItem('token', user.token);
          console.log(user.token);
          this.currentUserSource.next(user);
        }
      })
    );
  }
  

  registerUser(user: IRegisterUser): Observable<any> {
    return this.http.post(`${this.baseUrl}Account/register`, user);
  }

  loginUser(values:any): Observable<any> {
    // return this.http.post(`${this.baseUrl}Account/login`, user);
    return this.http.post(this.baseUrl + 'Account/login', values).pipe(
      map((user:ILoginUser) => {
        if(user){
          localStorage.setItem('token',user.token);
          this.currentUserSource.next(user);
        }
      })
    )
  }

  logOut(){
    localStorage.removeItem('token');
    this.currentUserSource.next(null);
    this.router.navigateByUrl('/');
  }
}
