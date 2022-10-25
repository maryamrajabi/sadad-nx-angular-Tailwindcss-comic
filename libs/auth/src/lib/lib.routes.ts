import { Route } from '@angular/router';
import { LoginComponent } from './container/login/login.component';

export const authRoutes: Route[] = [
  { path: 'login', component: LoginComponent }
];
