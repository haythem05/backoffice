import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../User/Services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {



  constructor(private  userAuthService: AuthenticationService , private router :Router)
  {

  }
  ngOnInit(): void {
    
  }


  @Output() toggleSidebarEvent = new EventEmitter<void>();

  toggleSidebar(): void {
    this.toggleSidebarEvent.emit();
  }


  public isLoggedIn()
  {
    return this.userAuthService.isLoggedIn();
  }
  public logout()
  {
 localStorage.removeItem('jwtToken');
 localStorage.removeItem('userData');

 this.router.navigate(['/login']);
  }
}

