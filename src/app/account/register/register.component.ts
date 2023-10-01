import { Component, OnInit } from '@angular/core';
import { IRegisterUser } from 'src/app/shared/models/user';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { customValidationMessages } from './validationMessages';

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

  customValidationMessages = customValidationMessages;

  constructor(private accountService: AccountService, private router: Router) {}
  ngOnInit(): void {
    this.createRegisterForm();
  }
  
  passwordValidator(control: FormControl) {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,13}$/;
    const valid = passwordPattern.test(control.value);
  
    return valid ? null : { passwordPattern: true };
  }
  

  createRegisterForm() {
    this.registerForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      mobile: new FormControl('', [Validators.required, Validators.pattern(/^\d{11}$/)]),
      address: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  
    // Set custom error messages for each field
    this.registerForm.get('username').setErrors(customValidationMessages);
    this.registerForm.get('firstName').setErrors(customValidationMessages);
    this.registerForm.get('lastName').setErrors(customValidationMessages);
    this.registerForm.get('email').setErrors(customValidationMessages);
    this.registerForm.get('mobile').setErrors(customValidationMessages);
    this.registerForm.get('address').setErrors(customValidationMessages);
    this.registerForm.get('password').setErrors(customValidationMessages);
  }
  

  onSubmit() {
    console.log(this.registerForm.value);
    this.accountService.registerUser(this.registerForm.value).subscribe(
      (response) => {
        // Handle successful registration here
        this.router.navigateByUrl('/account/login'); // Redirect to the login page
      },
      (error) => {
        // Handle registration error here
        console.error('Registration failed:', error);
      }
    );
  }
}
