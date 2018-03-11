import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {MainComponent} from './main/main.component';


export const AppRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'gallery',
    component: MainComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];
