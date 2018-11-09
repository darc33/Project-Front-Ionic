import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the OtroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-otro',
	templateUrl: 'otro.html',
})
export class OtroPage {
	name: string = "Asdd";

	constructor(public navCtrl: NavController,
 		public navParams: NavParams, 
		public alertCtrl: AlertController, 
 		public actionSheetCtrl: ActionSheetController) {
 	}

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad OtroPage');
 	}

 	cambiar() {
 		this.name = "pepito";
 	}

 	showAlert() {
 		const alert = this.alertCtrl.create({
 			title: 'New Friend!',
 			subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
 			buttons: ['OK']
 		});
 		alert.present();
 	}

 	showPrompt() {
 		const prompt = this.alertCtrl.create({
 			title: 'Login',
 			message: "Enter a name for this new album you're so keen on adding",
 			inputs: [
 			{
 				name: 'title',
 				placeholder: 'Title'
 			},
 			],
 			buttons: [
 			{
 				text: 'Cancel',
 				handler: data => {
 					console.log('Cancel clicked');
 				}
 			},
 			{
 				text: 'Save',
 				handler: data => {
 					console.log('Saved clicked');
 				}
 			}
 			]
 		});
 		prompt.present();
 	}

 	presentActionSheet() {
 		const actionSheet = this.actionSheetCtrl.create({
 			title: 'Modify your album',
 			buttons: [
 			{
 				text: 'Destructive',
 				role: 'destructive',
 				handler: () => {
 					console.log('Destructive clicked');
 				}
 			}, {
 				text: 'Archive',
 				handler: () => {
 					console.log('Archive clicked');
 				}
 			}, {
 				text: 'Cancel',
 				role: 'cancel',
 				handler: () => {
 					console.log('Cancel clicked');
 				}
 			}
 			]
 		});
 		actionSheet.present();
 	}


}
