import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiRequestProvider } from '../../providers/api-request/api-request';

import "rxjs/add/operator/map";
import { Storage } from '@ionic/storage';
import {ENV} from "../../environments/environment";
import { Http , Headers } from '@angular/http';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
  */
  @Injectable()
  export class AuthProvider {

  	url: string = ENV.API;
  	public token: any;
    public role: any;
    public user: any;
    public email: any;

  	constructor(public http: Http, public storage: Storage) {
  		console.log('Hello AuthProvider Provider');
  	}

  	createAccount(details){
  		return new Promise((resolve, reject) => {

  			let headers = new Headers();
  			headers.append('Content-Type', 'application/json');

  			this.http.post(this.url+'auth/register', JSON.stringify(details), {headers: headers})
  			.subscribe(res => {
  				let data = res.json();
  				//  this.token = data.token;
  				//this.storage.set('token', data.token);
  				resolve(data);

  			}, (err) => {
  				reject(err);
  			});
  		});
  	}

  	login(credentials){
  		return new Promise((resolve, reject) => {
  			let headers = new Headers();

  			headers.append('Access-Control-Allow-Origin' , '*');
  			headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
  			headers.append('Accept','application/json');
  			headers.append('content-type','application/json');
        this.email = credentials.email;
  			this.http.post(this.url+'auth/login', JSON.stringify(credentials), {headers: headers})
  			.subscribe(res => {
  				let data = res.json();
  				this.token = data.access_token;
  				this.storage.set('token', data.access_token);
          this.role=0;
  				resolve(data);
  			}, (err) => {
  				reject(err);

  			});  });

  	}

  	checkAuthentication(){

  		return new Promise((resolve, reject) => {
  			this.storage.get('token').then((value) => {

  				this.token = value;

  				resolve(this.token)


  			}, (err) => {
  				reject(err);

  			});  
  		});        
  	}


  	logout(){
  		this.storage.set('token', '');

  	}

    isLoggedIn(){
      return this.role === 0;
    }

    info(){
      return this.email;
    }

  }
