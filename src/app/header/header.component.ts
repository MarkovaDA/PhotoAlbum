import { Component, OnInit } from '@angular/core';
import { AuthService } from '../api/AuthService';
import { Router } from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  logOut() {
    this.authService.signOut();
    this.router.navigateByUrl('/login');
  }

  currentUserLogin(): string {
    return this.authService.getCurrentUser().login;
  }

  isUserAuthorized(): boolean {
    return this.authService.isAuthorized();
  }
}
