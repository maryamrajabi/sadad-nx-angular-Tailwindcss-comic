import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './containers/layout/layout.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@demo/material';
import { HeaderModule } from '@demo/header';

@NgModule({
  imports: [CommonModule, MaterialModule, HeaderModule],
  declarations: [LayoutComponent],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule {}
