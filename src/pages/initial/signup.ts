import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';

import { login } from './login';

@Component({
	selector: 'signup',
	templateUrl: 'signup.html'
})
export class signup {
	name:string = '';
  	password:string = '';
  	email:string = '';
  	errorMsg:string;

	//public navCtrl: NavController
	constructor(public navCtrl: NavController,
		public navParams: NavParams,
   	 	public alertCtrl:  AlertController,
    	public authService: AuthProvider ) {

	}

	ionViewDidLoad() {
    console.log('ionViewDidLoad signup');
  	}



  	errorFunc(message){
    	let alert = this.alertCtrl.create({
      	title: 'Warining!',
      	subTitle: message,
      	buttons: ['OK']
    	});
    	alert.present();
  	}

  	myRegister(){
 
    if (this.email.trim()  &&  this.name.trim()  && this.password.trim() ) {    
      
      console.log(this.name.trim() + "   " + this.password.trim() +" "+this.email.trim())
       
      if (this.password.trim()  === '') {
        this.errorFunc('Please put your password')
 
      }else{
 
        let credentials = {
          email: this.email,
          name: this.name,
            password: this.password
        };
 
        
         this.authService.createAccount(credentials).then((result) => {
            console.log(result);
            this.navCtrl.setRoot(login);
           
        }, (err) => {
     
            console.log(err);
            this. errorFunc('Wrong credentials ! try again')
            console.log("credentials: "+JSON.stringify(credentials))
            
        });
 
      }
      
   }
   else{
    
    this. errorFunc('Please put a vaild password ! ')
   
    }
 
 

	}




}