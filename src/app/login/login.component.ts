import { Component, OnInit } from '@angular/core';
import { AuthService } from '../api/AuthService';
import { User } from '../model/User';
import { Router } from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  currentUser: User;
  signInFailedShow: boolean;
  isProcessed: boolean;
  constructor(private authService: AuthService,
              private router: Router) {
    this.currentUser = new User();
  }

  ngOnInit() {}

  login() {
    this.signInFailedShow = false;
    this.isProcessed = true;
    const signIn = this.authService.signIn(this.currentUser)
      .debounceTime(1000)
      .subscribe((status) => {
        this.isProcessed = false;
        if (status) {
          // авторизация прошла успешно - редирект на страницу логина
          this.router.navigateByUrl('/gallery');
        } else {
          this.signInFailedShow = true;
        }
        signIn.unsubscribe();
      });
  }
}
