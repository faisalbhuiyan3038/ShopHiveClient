import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, ReplaySubject, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IAdminUser } from '../shared/models/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  baseUrl = environment.apiUrl;
  private currentAdminUserSource = new ReplaySubject<IAdminUser>(1);
  currentAdminUser$ = this.currentAdminUserSource.asObservable();
  
    constructor(private http:HttpClient, private router: Router) { }

    registerUser(user: IAdminUser): Observable<any> {
      return this.http.post(`${this.baseUrl}Admin/register`, user);
    }
  
    loginUser(values:any): Observable<any> {
      // return this.http.post(`${this.baseUrl}Account/login`, user);
      return this.http.post(this.baseUrl + 'Admin/login', values).pipe(
        map((user:IAdminUser) => {
          if(user){
            localStorage.setItem('token',user.token);
            this.currentAdminUserSource.next(user);
          }
        })
      )
    }
  
    logOut(){
      localStorage.removeItem('token');
      this.currentAdminUserSource.next(null);
      this.router.navigateByUrl('/');
    }
}
