import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DressesPage } from './dresses';

@NgModule({
  declarations: [
    DressesPage,
  ],
  imports: [
    IonicPageModule.forChild(DressesPage),
  ],
})
export class DressesPageModule {}
