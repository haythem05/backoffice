import { Component } from '@angular/core';
import { UserService } from '../Services/user.service';
import { User } from '../Model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent {


  user: User = new User();
  imageFile: File | null = null;
  users!: User[];

  constructor(private userService: UserService , private router : Router) {}

  onSubmit() {
    const formData = new FormData();
    
    formData.append('firstName', this.user.firstName);
    formData.append('lastName', this.user.lastName);
    formData.append('email', this.user.email);
    formData.append('password', this.user.password);
    formData.append('gender', this.user.gender);
    formData.append('role', this.user.role);
    formData.append('skillRate', this.user.skillRate.toString());
    formData.append('phone',this.user.phone);
    if (this.imageFile) {
      formData.append('file', this.imageFile, this.imageFile.name); 
    }
  
    this.userService.addUser(formData).subscribe(
      response => {
        console.log('User added successfully:', response);
        // Handle success response
        // Redirect to the user details page
        this.router.navigate(['/userDetails']);
      },
      error => {
        console.error('Error adding user:', error);
        // Handle error response
      }
    );
  }
  
  getUsers() {
    this.userService.getUserList().subscribe(data => {
      this.users = data;
    });
  }
  

  onFileSelected(event: any) {
    const files: FileList = event.target.files;
    if (files.length > 0) {
      this.imageFile = files[0];
    }
  }
  userlist() {
    this.router.navigate(['/userDetails'])
    

  }
}


 

