import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, NavParams } from 'ionic-angular';

import { AuthProvider } from '../../providers/auth/auth';
import { HomePage } from '../home/home';
import { SearchPage} from '../search/search';

import { MenuController } from 'ionic-angular';
import { Events } from 'ionic-angular';


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
    	public alertCtrl: AlertController,
      public menuCtrl: MenuController,
      public events:Events) {	

	}

	ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  	}



  	errorFunc(message){
    	// let alert = 
    	this.alertCtrl.create({
      	title: 'Warning!',
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
            this.events.publish('user:loggedin');
            this.navCtrl.setRoot(SearchPage).then(()=>
              {
                console.log("login:user");
                this.events.publish("user:loggedin");
              });
           
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