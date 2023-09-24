import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    // Check if the user is authenticated (e.g., by checking for a token in localStorage)
    if (localStorage.getItem('token')) {
      return true; // User is authenticated, allow access
    } else {
      this.router.navigate(['/login']); // User is not authenticated, redirect to the login page
      return false; // Restrict access
    }
  }
}
