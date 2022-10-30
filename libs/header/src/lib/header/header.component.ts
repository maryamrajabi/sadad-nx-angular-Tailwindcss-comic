import { Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '@demo/data-models';
import { AuthService } from '@demo/auth';
import { TranslateService } from '@ngx-translate/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'demo-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  private static readonly DARK_THEME_CLASS = 'black-theme';
  private static readonly LIGHT_THEME_CLASS = 'light-theme';
  private static readonly DARK_THEME_LIGHT = 'light';
  private static readonly DARK_THEME_DARK = 'black';
  user$: Observable<User> = new Observable<User>();
  public theme: string;

  constructor(private authService: AuthService,
              public translate: TranslateService,
              @Inject(DOCUMENT) private document: Document) {
    translate.addLangs(['en', 'fa']);
    translate.setDefaultLang('en');
    this.theme = this.document.documentElement.classList.contains(HeaderComponent.DARK_THEME_CLASS) ? HeaderComponent.DARK_THEME_DARK : HeaderComponent.DARK_THEME_LIGHT;
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

  public selectDarkTheme(): void {
    if (this.document.documentElement.classList.contains(HeaderComponent.DARK_THEME_CLASS)) {
      this.document.documentElement.classList.remove(HeaderComponent.DARK_THEME_CLASS);
    } else {
      this.document.documentElement.classList.remove(HeaderComponent.LIGHT_THEME_CLASS);
      this.document.documentElement.classList.add(HeaderComponent.DARK_THEME_CLASS);
      this.theme = HeaderComponent.DARK_THEME_DARK;
    }
  }

  public selectLightTheme(): void {
    if (this.document.documentElement.classList.contains(HeaderComponent.LIGHT_THEME_CLASS)) {
      this.document.documentElement.classList.remove(HeaderComponent.LIGHT_THEME_CLASS);
    } else {
      this.document.documentElement.classList.add(HeaderComponent.LIGHT_THEME_CLASS);
      this.document.documentElement.classList.remove(HeaderComponent.DARK_THEME_CLASS);
      this.theme = HeaderComponent.DARK_THEME_LIGHT;
    }
  }

}
