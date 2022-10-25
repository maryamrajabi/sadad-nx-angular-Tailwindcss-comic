import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Authenticate } from '@demo/data-models';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'demo-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  login(authenticate: Authenticate): void {
    this.authService.login(authenticate).subscribe();
  }
}
