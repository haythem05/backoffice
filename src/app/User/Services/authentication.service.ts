import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }
  public setTokenAndUser(jwtToken: string, userData: any): void {
    localStorage.setItem('jwtToken', jwtToken);
    localStorage.setItem('userData', JSON.stringify(userData));
  }


  public getUserData(): any {
    const userData = localStorage.getItem('userData');
    return userData ? JSON.parse(userData) : null;
  }

  isAdmin(): boolean {
     const userData = this.getUserData();
     return userData && userData.role === "Admin";
  }


  public  getToken(): string { 
    return localStorage.getItem('jwtToken') || '';
  }

  public clear(): void {
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('userData');
  }

  public isLoggedIn(): boolean {
    // Check if the token exists
    const token = this.getToken();
    return !!token; // Returns true if token exists, false otherwise
  }
  
}
