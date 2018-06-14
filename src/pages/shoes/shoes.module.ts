import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShoesPage } from './shoes';

@NgModule({
  declarations: [
    ShoesPage,
  ],
  imports: [
    IonicPageModule.forChild(ShoesPage),
  ],
})
export class ShoesPageModule {}
