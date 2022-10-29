import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FlexModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@demo/material';
import { TranslateDemoModule } from '@demo/translate-demo';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [CommonModule, FlexModule, RouterModule, MaterialModule, TranslateDemoModule, TranslateModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
})
export class HeaderModule {}
