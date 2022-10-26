import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '@demo/data-models';
import { AuthService } from '@demo/auth';

@Component({
  selector: 'demo-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  user$: Observable<User> = new Observable<User>();

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.user$ = this.authService.user$;
  }

  logout() {
    this.authService.logout();
  }
}
