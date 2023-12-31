import { Component, OnInit } from '@angular/core';
import { ILoginUser } from 'src/app/shared/models/user';
import { AccountService } from '../account.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
loginForm: FormGroup;
returnUrl: string;
  // loginUser: ILoginUser = { userName: '', password: '' };

  constructor(private accountService: AccountService, private router: Router, private activatedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/shop';
    this.createLoginForm();
  }

  createLoginForm(){
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  onSubmit() {
    this.accountService.loginUser(this.loginForm.value).subscribe(() => {
      this.router.navigateByUrl(this.returnUrl);
    },
      // (response) => {
      //   // Handle successful login here
      //   // You can store user information or token in localStorage
      //   localStorage.setItem('token', response.token);
      //   console.log(response.token);
      //   this.router.navigateByUrl('/checkout'); // Redirect to a protected page
      // },
      (error) => {
        // Handle login error here
        console.error('Login failed:', error);
      }
    );
  }
}
