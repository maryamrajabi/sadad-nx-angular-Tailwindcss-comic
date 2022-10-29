import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '@demo/data-models';
import { AuthService } from '@demo/auth';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'demo-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  user$: Observable<User> = new Observable<User>();

  constructor(private authService: AuthService,
              public translate: TranslateService) {
    translate.addLangs(['en', 'fa']);
    translate.setDefaultLang('en');
  }

  ngOnInit() {
    this.user$ = this.authService.user$;
  }

  logout() {
    this.authService.logout();
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }

}
