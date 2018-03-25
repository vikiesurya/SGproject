import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WelcomePage } from '../welcome/welcome';

export interface Slide {
  title: string;
  description: string;
  image: string;
}
@IonicPage()
@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html',
})
export class TutorialPage {

  slides: Slide[];
  showSkip = true;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

      this.slides = [
          {
            title: 'Instant service',
            description: 'we provide instant and valuable service',
            image: 'img/ica-slidebox-img-1.png',
          },
          {
            title: "Door step service",
            description: "One call our service man will be in your door step",
            image: 'img/ica-slidebox-img-2.png',
          },
          {
            title: "Feel the experience",
            description: "Feel the result through our work",
            image: 'img/ica-slidebox-img-3.png',
          }
        ];
  }


   startApp() {
    this.navCtrl.setRoot(WelcomePage, {}, {
      animate: true,
      direction: 'forward'
    });
  }

  onSlideChangeStart(slider) {
    this.showSkip = !slider.isEnd();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TutorialPage');
  }

}
