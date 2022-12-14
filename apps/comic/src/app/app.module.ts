import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { AuthGuard, AuthModule } from '@demo/auth';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@demo/layout';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { authRoutes } from '../../../../libs/auth/src/lib/lib.routes';
import { CardModule } from '@demo/card';
import { HeaderModule } from '@demo/header';
import { LoadingModule } from '@demo/loading';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', redirectTo: 'comics' },
      { path: 'auth', children: authRoutes },
      {
        path: 'comics',
        loadChildren: () =>
          import('@demo/comics').then((mod) => mod.ComicsModule),
        canActivate: [AuthGuard]
      }
    ]),
    AuthModule,
    LayoutModule,
    StoreModule.forRoot(
      {},
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true
        }
      }
    ),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule.forRoot(),
    CardModule,
    HeaderModule,
    LoadingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
