import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthState, LoginSuccess } from '@demo/auth';
import { LoadingService } from '../../../../libs/loading/src/lib/loading.service';

@Component({
  selector: 'demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app';
  loading: boolean = false;

  constructor(private store: Store<AuthState>,
              private loadingService: LoadingService) {
    const user = JSON.parse(JSON.stringify(localStorage.getItem('user')));
    if (user) {
      this.store.dispatch(new LoginSuccess(user));
    }

    loadingService.changeLoading$.subscribe(
      data => {
        setTimeout(() => this.loading = data, 1000);
      });
  }
}
