import { Component } from '@angular/core';
import { AuthenticationService } from './User/Services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PokerPlanning';
  isDashboardVisible: boolean = false;
  isSidebarVisible: boolean = true;

  constructor(public authService: AuthenticationService) {}
  toggleDashboard(): void {
    this.isDashboardVisible = !this.isDashboardVisible;
  }

  toggleSidebar(): void {
    this.isSidebarVisible = !this.isSidebarVisible;
  }
}

