import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Authenticate } from '@demo/data-models';
import { AuthState } from '@demo/auth';
import { Store } from '@ngrx/store';
import * as authActions from './../../+state/auth.actions';
@Component({
  selector: 'demo-app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {

  constructor(private store: Store<AuthState>) {}
  login(authenticate: Authenticate) {
    this.store.dispatch(new authActions.Login(authenticate));
  }
}
