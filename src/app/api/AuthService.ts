import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  public isAuthorized(): boolean {
    /*
    *Если либо this.authStatus = true (только что произошел логин) либо имеется токен в кеше и этот токен не истек
    * */
    return !!this.authStatus;
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
}
