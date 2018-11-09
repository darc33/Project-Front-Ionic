import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, NavParams } from 'ionic-angular';

import { AuthProvider } from '../../providers/auth/auth';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
	selector: 'page-login',
	templateUrl: 'login.html'
})
export class login {
	email:string = '';
  	password:string = '';

  	errorMsg:string;


	constructor(public navCtrl: NavController,public navParams: NavParams,
		public authService: AuthProvider ,
    	public alertCtrl: AlertController) {	
	}

	ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  	}



  	errorFunc(message){
    	// let alert = 
    	this.alertCtrl.create({
      	title: 'Warining!',
      	subTitle: message,
      	buttons: ['OK']
    	}).present();

    	// alert.present();
  	}







  myLogIn(){
 
    if (this.email.trim()  && this.password.trim() ) {    
      
      console.log(this.email.trim() + "   " + this.password.trim() )
       
      if (this.password.trim()  === '') {
        this.errorFunc('Please put your password')
 
      }else{
 
        let credentials = {
          email: this.email,
            password: this.password
        };
 
        
         this.authService.login(credentials).then((result) => {
            console.log(result);
            this.navCtrl.setRoot(HomePage);
           
        }, (err) => {
     
            console.log(err);
            this. errorFunc('Wrong credentials ! try again')
            console.log("credentials: "+JSON.stringify(credentials))
            
        });
 
      }
      
   }
   else{
    
    this. errorFunc('Please put a vaild password !  ')
   
    }
 
 
}





myLogOut(){
  this.authService.logout();
}
}