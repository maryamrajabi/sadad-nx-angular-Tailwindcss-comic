import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { comicsRoutes } from './lib.routes';
import { ComicsComponent } from './containers/comics/comics.component';
import { ComicListComponent } from './containers/comic-list/comic-list.component';
import { FlexModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '@demo/material';
import { ReactiveFormsModule } from '@angular/forms';
import { CardModule } from '@demo/card';
import { TranslateModule } from '@ngx-translate/core';
import { RtlDirectiveModule } from '@demo/rtl';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild(comicsRoutes),
    FlexModule,
    CardModule,
    TranslateModule,
    RtlDirectiveModule
  ],
  declarations: [ComicsComponent, ComicListComponent],
})
export class ComicsModule {}
