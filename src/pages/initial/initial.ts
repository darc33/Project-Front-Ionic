import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { login } from './login';
import { signup } from './signup';
import { AuthProvider } from '../../providers/auth/auth';


@Component({
	selector: 'page-initial',
	templateUrl: 'initial.html'
})
export class InitialPage {

	//public navCtrl: NavController
	constructor(public navCtrl: NavController, public auth: AuthProvider) {

	}

	ingresar(){
		this.navCtrl.push(login);
	}

	registrar(){
		this.navCtrl.push(signup);
	}



}


