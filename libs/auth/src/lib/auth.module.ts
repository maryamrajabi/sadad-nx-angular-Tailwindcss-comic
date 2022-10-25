import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { authRoutes } from './lib.routes';
import { LoginComponent } from './container/login/login.component';
import { LoginFormComponent } from './container/login-form/login-form.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '@demo/material';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptor } from './interceptors/auth/auth.interceptor';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromAuth from './+state/auth.reducer';
import { AuthEffects } from './+state/auth.effects';

const COMPONENTS = [LoginComponent, LoginFormComponent];
import { authReducer, initialState as authInitialState } from './+state/auth.reducer';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    StoreModule.forFeature('auth', authReducer, { initialState: authInitialState }),
    EffectsModule.forFeature([AuthEffects]),
  ],
  declarations: [COMPONENTS],
  exports: [COMPONENTS],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    AuthEffects
  ],
})
export class AuthModule {}
