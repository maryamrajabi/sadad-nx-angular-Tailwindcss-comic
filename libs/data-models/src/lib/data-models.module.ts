import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export { Authenticate } from './authenticate';
export { User } from './user';
export { Comic } from './comic';

@NgModule({
  imports: [CommonModule],
})
export class DataModelsModule {}
