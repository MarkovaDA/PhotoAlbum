import { Component, OnInit } from '@angular/core';
import { AuthService } from '../api/AuthService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  isAuthorized() {
    return this.authService.isAuthorized();
  }

  logOut() {
    this.authService.signOut();
    this.router.navigateByUrl('/login');
  }

  currentUserLogin(): string {
    return this.authService.getCurrentUser().login;
  }
}
