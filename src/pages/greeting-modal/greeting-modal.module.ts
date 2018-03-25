import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GreetingModalPage } from './greeting-modal';

@NgModule({
  declarations: [
    GreetingModalPage,
  ],
  imports: [
    IonicPageModule.forChild(GreetingModalPage),
  ],
})
export class GreetingModalPageModule {}
