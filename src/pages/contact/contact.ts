import { Component } from '@angular/core';
import { NavController, NavParams,ModalController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';
import { Http, Headers, RequestOptions } from '@angular/http';
import { AlertController } from 'ionic-angular';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  service: any;
  contactNumber: any;
  emailId: any;
  message: any;
  name: any;

  constructor(public navCtrl: NavController, public http: Http, public navParams: NavParams, public toastCtrl: ToastController, public emailComposer: EmailComposer, public alertCtrl: AlertController, public modal: ModalController) {


    this.service = "";
    this.name = "";
    this.contactNumber = "";
    this.emailId = "";
    this.message = "";
  }


  contactUs() {

    let message = 'Name: ' + this.name + '\n' + 'Email: ' + this.emailId + '\n' + 'Contact Number: ' + this.contactNumber + '\n' + 'Service required: ' + this.service + '\n' + 'message: ' + this.message;

    if (this.name != "" && this.emailId != "" && this.contactNumber != "") {

      this.saveUserInfo();
      //this.sendEmail();

      // let email = {
      //   to: 'sgroupsservice@gmail.com',
      //   cc: '',
      //   attachments: [],
      //   subject: 'Customer request for AC service',
      //   body: message,
      //   isHtml: true
      // };
      // this.emailComposer.open(email);

      let toast = this.toastCtrl.create({
        message: "thanks for contacting us " + this.name + ", we will get back to you shortly.",
        duration: 3000
      });
      toast.present();
    }
    else {

      let alert = this.alertCtrl.create({

        title: 'Warning',
        subTitle: 'Required fields are empty',
        buttons: ['OK']
      });

      alert.present();
    }
  }

  saveUserInfo() {
    let message = 'Name: ' + this.name + '\n' + 'Email: ' + this.emailId + '\n' + 'Contact Number: ' + this.contactNumber + '\n' + 'Service required: ' + this.service + '\n' + 'message: ' + this.message;
    let emailTo = this.emailId;
    let name = this.name;
    let contact = this.contactNumber;
    let service = this.service;
    let message1 = message;
    let message2 = this.message;

    let data = JSON.stringify({ emailTo, name, contact, service, message1,message2 });
    let link = "http://www.sgroupservice.com/api/insertCustomerInfo.php";
    try {

      this.http.post(link, data)
        //.map(res => res.json())
        .subscribe();
    }
    catch (e) {
      console.log(e);
    }
  }

  openModal(){
    let myData = {
      name: this.name
    }
    const myModal = this.modal.create('GreetingModalPage', { data: myData } );
    myModal.present();
  }

  // sendEmail() {
  //   let message = 'Name: ' + this.name + '\n' + 'Email: ' + this.emailId + '\n' + 'Contact Number: ' + this.contactNumber + '\n' + 'Service required: ' + this.service + '\n' + 'message: ' + this.message;

  //   let emailTo = this.emailId;
  //   let name = this.name;
  //   let contact = this.contactNumber;
  //   let service = this.service;
  //   let message1 = this.message;

  //   let data = JSON.stringify({ emailTo, name, contact, service, message1 });


  //   let link = "http://www.sgroupservice.com/api/email.php";
  //   try {

  //     this.http.post(link, data)
  //       //.map(res => res.json())
  //       .subscribe();
  //     console.log(message);
  //   }
  //   catch (e) {
  //     console.log(e);
  //   }

  // }
}
