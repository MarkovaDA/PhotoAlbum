import { Component, OnInit } from '@angular/core';
import { AuthService} from './api/AuthService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    const authObserver = this.authService.authorize().subscribe((status) => {
      if (status) {
        this.router.navigateByUrl('/gallery');
      } else {
        this.router.navigateByUrl('/login');
      }
    });
  }
}
