import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';
  validationMessage: string = '';

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  signin() {
    if(this.username === 'admin' && this.password === '1234') {
      this.authService.signin().then(isSignedIn => {
        if(isSignedIn) {
          this.router.navigate(['characters']);
        }
      });
    }else {
      this.validationMessage = 'Invalid user';
    }
  }

}
