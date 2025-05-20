import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';
import { AuthenticationService } from '../Services/authentication.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})




export class LoginComponent implements OnInit {

  constructor(private userService: UserService , private userAuthService:AuthenticationService , private router : Router) {}
  captcha: string = '';
  recaptchaResolved : boolean = true;
  email: string = '';
  password: string = '';
  warningMessage: string = '';
  
  ngOnInit(): void {
   
  }

  
  resolved(captchaRespone: string | null) {
    if (captchaRespone !== null) {
      this.captcha = captchaRespone;
      this.recaptchaResolved = true;
      console.log('resolved captcha with response :' + this.captcha);
    }


    
  }
 login(loginForm: NgForm) {
  if (this.recaptchaResolved) {
    // Proceed with login
    this.userService.login(loginForm.value).subscribe(
      (response: any) => {
        const token = response.token;
        const userData = response.user;

        this.userAuthService.setTokenAndUser(token, userData);

        // Check if the user is an admin
        if (this.userAuthService.isAdmin()) {
          // Redirect to userDetails page if admin
          this.router.navigate(['/userDetails']);
        } else {
          // Display alert message if not admin
          alert('Access Denied. Only admins are allowed.');
          this.userAuthService.clear();
        }
      },
      (error) => {
        console.log(error);
        if (error.error && error.error.message === 'Your account is banned') {
          // Account is banned, display appropriate message
          this.warningMessage = 'Your account is banned! Please contact the Administration team.';
        } else {
          // Regular error handling for invalid credentials
          this.warningMessage = 'Invalid credentials. Please try again.';
        }
      }
    );
  } else {
    // Display a message indicating that the reCAPTCHA needs to be resolved
    this.warningMessage = 'Please complete the reCAPTCHA.';
  }
}

}

