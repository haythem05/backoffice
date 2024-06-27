import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { UserDetailsComponent } from './User/user-details/user-details.component';
import { LoginComponent } from './User/login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { AdduserComponent } from './User/adduser/adduser.component';
import { UpdateUserComponent } from './User/update-user/update-user.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { RecaptchaModule } from 'ng-recaptcha';







@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    LoginComponent,
    HeaderComponent,
    ProfileComponent,
    SidebarComponent,
    FooterComponent,
    BodyComponent,
    AdduserComponent,
    UpdateUserComponent,
    UnauthorizedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatIconModule,
    MatSliderModule,
    MatSelectModule,
    MatDialogModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    RecaptchaModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
    // provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
