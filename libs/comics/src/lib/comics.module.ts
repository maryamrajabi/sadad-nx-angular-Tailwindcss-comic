import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { comicsRoutes } from './lib.routes';
import { ComicsComponent } from './containers/comics/comics.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromComics from './+state/comics.reducer';
import { ComicsEffects } from './+state/comics.effects';
import { ComicListComponent } from './containers/comic-list/comic-list.component';
import { comicsReducer,  initialState as comicsInitialState,
} from './+state/comics.reducer';
import { FlexModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '@demo/material';
import { ReactiveFormsModule } from '@angular/forms';
import { CardModule } from '@demo/card';
import { TranslateModule } from '@ngx-translate/core';
// import { CardModule } from '@demo/card';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild(comicsRoutes),
    StoreModule.forFeature(
      'comics',
      comicsReducer, {
        initialState: comicsInitialState
      }
    ),
    EffectsModule.forFeature([ComicsEffects]),
    FlexModule,
    CardModule,
    TranslateModule
    // CardModule
    // CardModule
  ],
  declarations: [ComicsComponent, ComicListComponent],
})
export class ComicsModule {}
