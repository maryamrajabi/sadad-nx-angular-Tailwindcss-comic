import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthState, LoginSuccess } from '@demo/auth';

@Component({
  selector: 'demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app';

  constructor(private store: Store<AuthState>) {
    const user = JSON.parse(JSON.stringify(localStorage.getItem('user')));
    if (user) {
      this.store.dispatch(new LoginSuccess(user));
    }
  }
}
