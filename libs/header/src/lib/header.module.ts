import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FlexModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@demo/material';
import { TranslateDemoModule } from '@demo/translate-demo';
import { TranslateModule } from '@ngx-translate/core';
import { RtlDirectiveModule } from '@demo/rtl';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [CommonModule, FlexModule, BrowserModule, BrowserAnimationsModule, RouterModule, MaterialModule, TranslateDemoModule, TranslateModule, RtlDirectiveModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
})
export class HeaderModule {}
