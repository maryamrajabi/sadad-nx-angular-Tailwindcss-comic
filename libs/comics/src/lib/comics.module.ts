import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { comicsRoutes } from './lib.routes';
import { ComicsComponent } from './containers/comics/comics.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(comicsRoutes)],
  declarations: [ComicsComponent],
})
export class ComicsModule {}
