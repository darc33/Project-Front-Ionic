import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { login } from '../initial/login';
import { signup } from '../initial/signup';
import { SearchPage} from '../search/search';
import { AuthProvider } from '../../providers/auth/auth';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	constructor(public navCtrl: NavController, public auth: AuthProvider) {

	}

	ingresar(){
		this.navCtrl.push(login);
	}

	registrar(){
		this.navCtrl.push(signup);
	}

	Ir(){
		this.navCtrl.push(SearchPage);
	}



}


