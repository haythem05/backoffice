import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from '../User/Services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthenticationService, private router: Router) { }

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      // Check if the user is an admin
      if (this.authService.isAdmin()) {
        return true; // Allow navigation
      } else {
        // User is not an admin, redirect to unauthorized page
        this.router.navigate(['/unathorized']);
        return false;
      }
    } else {
      // User is not logged in, redirect to login page
      this.router.navigate(['/login']);
      return false;
    }
  }
}
