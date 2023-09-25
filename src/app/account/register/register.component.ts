import { Component, OnInit } from '@angular/core';
import { IRegisterUser } from 'src/app/shared/models/user';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  registerUser: IRegisterUser = {
    userName: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    mobile: '',
    address: '',
  };

  constructor(private accountService: AccountService, private router: Router) {}
  ngOnInit(): void {
    this.createRegisterForm();
  }

  createRegisterForm(){
    this.registerForm = new FormGroup({
      username: new FormControl('',Validators.required),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      mobile: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
    })
  }

  onSubmit() {
    this.accountService.registerUser(this.registerUser).subscribe(
      () => {
        // Handle successful registration here
        this.router.navigateByUrl('/Account/login'); // Redirect to the login page
      },
      (error) => {
        // Handle registration error here
        console.error('Registration failed:', error);
      }
    );
  }
}
