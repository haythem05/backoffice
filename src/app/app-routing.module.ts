import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './User/user-details/user-details.component';
import { AdduserComponent } from './User/adduser/adduser.component';
import { UpdateUserComponent } from './User/update-user/update-user.component';
import { LoginComponent } from './User/login/login.component';
import { AuthGuard } from './Guard/auth.guard';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';


const routes: Routes = [
  { path: '',  component: LoginComponent }, // Redirect to login
  { path: 'login', component: LoginComponent },
  { path: 'userDetails', component: UserDetailsComponent, canActivate: [AuthGuard] },
  { path: 'adduser', component: AdduserComponent, canActivate: [AuthGuard] },
  { path: 'updateUser/:id', component: UpdateUserComponent, canActivate: [AuthGuard] },
 // { path: 'unathorized', component: UnauthorizedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }