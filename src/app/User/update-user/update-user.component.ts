import { Component } from '@angular/core';
import { User } from '../Model/user';
import { UserService } from '../Services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.css'
})
export class UpdateUserComponent {


  
  userId!: number;
  user: User = new User();
  imageFile: File | null = null;


  constructor(private userservice: UserService , private route: ActivatedRoute , private router: Router)
  {}

  ngOnInit(): void {

    this.userId = this.route.snapshot.params['id'];

    this.userservice.getUserById(this.userId).subscribe(data =>{
      this.user = data;
    });
  }

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
      formData.append('file', this.imageFile, this.imageFile.name); // Use 'file' as the field name
    }

    this.userservice.UpdateUser(this.userId, this.user, this.imageFile).subscribe(
      response => {
        console.log('User updated successfully:', response);
        // Handle success response
        this.userlist();
      },
      error => {
        console.error('Error updating user:', error);
        // Handle error response
      }
    );
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
