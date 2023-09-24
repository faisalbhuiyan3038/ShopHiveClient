import { Component } from '@angular/core';
import { ILoginUser } from 'src/app/shared/models/user';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginUser: ILoginUser = { userName: '', password: '' };

  constructor(private accountService: AccountService, private router: Router) {}

  login() {
    this.accountService.loginUser(this.loginUser).subscribe(
      (response) => {
        // Handle successful login here
        // You can store user information or token in localStorage
        localStorage.setItem('token', response.token);
        console.log(response.token);
        this.router.navigateByUrl('/checkout'); // Redirect to a protected page
      },
      (error) => {
        // Handle login error here
        console.error('Login failed:', error);
      }
    );
  }
}
