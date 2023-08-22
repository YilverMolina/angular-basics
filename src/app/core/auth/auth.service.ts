import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isUserLoggedIn: boolean = false;

  constructor() { }

  isAuthenticated(): boolean {
    return this.isUserLoggedIn;
  }

  signin(): Promise<boolean> {
    return new Promise<boolean>(resolve => {
      this.isUserLoggedIn = true;
      resolve(true);
    });
  }
}
