import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { SearchPage} from '../search/search';

/**
 * Generated class for the ReportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-report',
  templateUrl: 'report.html',
})
export class ReportPage {
  name:string = '';
  type:string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportPage');
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
    if (this.name.trim() === '' || this.type.trim() === ''){
      this.errorFunc('Datos faltantes')
    }
    else{
      let alert = this.alertCtrl.create({
        title: 'Gracias!',
        subTitle: 'Reporte generado',
        buttons: ['OK']
      });
      alert.present();
      this.navCtrl.setRoot(SearchPage);
    }
  	
  }

}
