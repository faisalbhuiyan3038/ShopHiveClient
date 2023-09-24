import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import { environment } from 'src/environments/environment';
import { IRegisterUser, ILoginUser } from '../shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
baseUrl = environment.apiUrl;


  constructor(private http:HttpClient) { }

  registerUser(user: IRegisterUser): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/Account/Register`, user);
  }

  loginUser(user: ILoginUser): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/Account/Login`, user);
  }
}
