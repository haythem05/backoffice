import { Component } from '@angular/core';
import { User } from '../Model/user';
import { UserService } from '../Services/user.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { AuthenticationService } from '../Services/authentication.service';



@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {
  userList!: User[];
  users!: User[];
  dataSource:any;
  displayedColumns = ['userId','firstName','lastName','email','gender','role','skillRate','banned','Actions'];

  constructor(private userService: UserService, private router: Router ,  private authserv : AuthenticationService){
    this.userService.getUserList()
    .subscribe(res => {
      this.userList = res;
      this.dataSource = new MatTableDataSource<User>(this.userList);
    });
  }



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

getUsers() {
  this.userService.getUserList().subscribe(data => {
    this.users = data;
  });
}


deleteUser(id: number) {
  this.userService.DeleteProfil(id).subscribe(() => {
    // Refresh the user list after deletion
    this.getUsers();
    
    // Check if the deleted user is the logged-in user
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    if (userData && userData.userId === id) {
      // Clear local storage and perform logout
      this.authserv.clear();
      // Redirect to the login page or perform any other logout actions
      // Example: this.router.navigate(['/login']);
    } else {
      // Redirect to the user details page after deleting the user
      this.router.navigate(['/userDetails']);
    }
  });
}
resetBannedStatus(userId: number) {
  this.userService.resetBannedStatus(userId).subscribe((response: string) => {
    console.log(response); // Log the response
    // Refresh the user list after resetting banned status
    this.getUsers();
  
  }, error => {
    console.error('Error resetting banned status:', error); // Log any errors
  });
}


  editUser(id: number) {
    this.router.navigate(['/updateUser', id]);
  
  }





}
