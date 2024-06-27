import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../User/Model/user';
import { UserService } from '../User/Services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {


  
  user: User = new User();

  constructor(private userServ: UserService, private router: Router) { }

  ngOnInit(): void {
    const userData = this.userServ.getUserData();
    if (userData) {
      this.user = userData;
    }
  }
}
