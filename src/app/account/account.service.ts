import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject, Observable, ReplaySubject, map, of} from "rxjs";
import { environment } from 'src/environments/environment';
import { IRegisterUser, ILoginUser } from '../shared/models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
baseUrl = environment.apiUrl;
private currentUserSource = new ReplaySubject<ILoginUser>(1);
currentUser$ = this.currentUserSource.asObservable();

  constructor(private http:HttpClient, private router: Router) { }

  

  loadCurrentUser(token: string){
    if(token === null){
      this.currentUserSource.next(null);
      return of(null);
    }

    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);
  
    return this.http.get(this.baseUrl + 'Account', { headers }).pipe(
      map((user: ILoginUser) => {
        if (user) {
          localStorage.setItem('token', user.token);
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
