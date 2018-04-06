import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from '../model/User';
import { Credential } from '../model/Credential';
import { environment } from '../../environments/environment';


@Injectable()
export class AuthService {
  private currentUser: User;
  private authStatus: boolean;
  constructor(private httpClient: HttpClient) {}
  // signIn - вход
  // тестовые данные: dmarkova 1234567
  // test test
  /*Api выдает 500 ошибку если вводится юзер с несуществующим в системе логином*/
  public signIn(user: User): any {
    return new Observable(observer => {
        this.httpClient.post<Credential>(`${environment.API_URL}/signin`, user)
          .subscribe((credentials) => {
            const { token } = credentials;
            const { login } = user;
            this.currentUser = user;
            this.cacheCredentials(token, login);
            this.authStatus = true;
            observer.next(true);
        }, (error) => {
            this.authStatus = false;
            observer.next(false);
        });
      });
  }

  public signOut() {
    this.clearCredentials();
    this.authStatus = false;
  }

  // авторизован ли пользователь в системе
  public authorize(): Observable<boolean> {
    return new Observable<boolean>((observer) => {
      const token = this.getCachedToken();
      // токен существует
      if (!!token) {
        this.httpClient.get(`${environment.API_URL}/user/`, {
          headers: this.getAuthHeader(),
        }).subscribe((user: User) => {
          this.authStatus = true;
          this.currentUser = user;
          return observer.next(true); // токен не истек
        }, (failure) => {
          this.authStatus = false;
          return observer.next(false); // токен истек
        });
      } else {
        // токена не существует
        this.authStatus = false;
        return observer.next(false);
      }
    });
  }

  public isAuthorized(): boolean {
    return this.authStatus;
  }

  public getCurrentUser(): User {
    return this.currentUser;
  }

  public getCachedToken(): string {
    return localStorage.getItem('token');
  }

  public getCachedLogin(): string {
    return localStorage.getItem('login');
  }

  private cacheCredentials(token: string, login: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('login', login);
  }

  private clearCredentials() {
    localStorage.clear();
  }

  private getAuthHeader() {
    const token = this.getCachedToken();
    return new HttpHeaders().set('token', `Bearer ${token}`);
  }
}
