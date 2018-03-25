import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import{ CallNumber } from '@ionic-native/call-number';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController,public call: CallNumber) {

  }

async contactUs():Promise<any>{
  try{
    await this.call.callNumber('1800 270 0073',true);
  }
  catch(e){
    console.error(e);
  }
}
}
