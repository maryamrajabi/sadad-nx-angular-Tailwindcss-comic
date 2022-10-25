import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '@demo/data-models';
import { AuthService } from '@demo/auth';

@Component({
  selector: 'demo-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  user$: Observable<User> = new Observable<User>();

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.user$ = this.authService.user$;
  }
}
