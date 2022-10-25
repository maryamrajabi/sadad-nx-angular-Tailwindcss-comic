import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Authenticate, User } from '@demo/data-models';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import * as authActions from '../../+state/auth.actions';
import { Store } from '@ngrx/store';
import { AuthState } from '../../+state/auth.reducer';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userSubject$ = new BehaviorSubject<any>(null); // todo user type
  user$ = this.userSubject$.asObservable();

  constructor(private httpClient: HttpClient,
              private store: Store<AuthState>) {
    const user = localStorage.getItem('user');
    if (user) {
      this.userSubject$.next(JSON.parse(user));
    }
  }

  login(authenticate: Authenticate | null): Observable<User> {
    return this.httpClient.post<User>('http://localhost:3000/login', authenticate)
      .pipe(tap((user: User) => {
        this.userSubject$.next(user);
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('token', JSON.stringify(user.token));
      }));
  }

  logout(): void {
    this.userSubject$.next(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    this.store.dispatch(new authActions.Login(null));

  }

}
