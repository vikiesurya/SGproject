import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ViewController} from 'ionic-angular';

/**
 * Generated class for the GreetingModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-greeting-modal',
  templateUrl: 'greeting-modal.html',
})
export class GreetingModalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public view: ViewController) {
  }

  ionViewWillLoad() {
    const data = this.navParams.get('data');
    console.log(data);
  }
  closeModal(){
     
    this.view.dismiss();
  }

}
