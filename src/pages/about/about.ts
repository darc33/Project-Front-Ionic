import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';


/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {
  name:string ='';
  email:string ='';
  topic:string ='';
  message:string ='';

  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }

  errorFunc(message){
    let alert = this.alertCtrl.create({
      title: 'Advertencia!',
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
   }

  enviar(){
    //console.log( "log:" + this.email.trim() + "   " + this.name.trim() + "   " + this.topic.trim() + "   " + this.message.trim() );
    if (this.name.trim() === '' || this.email.trim() === '' || this.topic.trim() === '' || this.message.trim() === ''){
      this.errorFunc('Por favor llene los espacios requeridos')
    }
    else{
      let alert = this.alertCtrl.create({
        title: 'Exito!',
        subTitle: 'Gracias por su mensaje.',
        buttons: ['OK']
      });
      alert.present();
      this.navCtrl.setRoot(HomePage);
    }
  	
  }
  

}
