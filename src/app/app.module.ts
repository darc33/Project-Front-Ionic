import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { InitialPage } from '../pages/initial/initial';
import { login } from '../pages/initial/login';
import { signup } from '../pages/initial/signup';
import { OtroPage } from '../pages/otro/otro';
import { SearchPage} from '../pages/search/search';
import { LogoutPage } from '../pages/logout/logout';

import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http'; 


import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { GooglePlus } from '@ionic-native/google-plus';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ComponentsModule } from '../components/components.module';

import { AuthProvider } from '../providers/auth/auth';
import { ApiRequestProvider } from '../providers/api-request/api-request';
import { CurdProvider } from '../providers/curd/curd';

export const firebaseConfig = {
  apiKey: "AIzaSyCdz5bBoqhsi__q7MtnYE-A9AwF6qw8YZo",
  authDomain: "engativa-c202d.firebaseapp.com",
  databaseURL: "https://engativa-c202d.firebaseio.com",
  storageBucket: "engativa-c202d.appspot.com",
  messagingSenderId: "11902064902"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    InitialPage,
    login,
    signup,
    OtroPage,
    SearchPage,
    LogoutPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig), // <-- firebase here
    AngularFireAuthModule, 
    ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    InitialPage,
    login,
    signup,
    OtroPage,
    SearchPage,
    LogoutPage
  ],
  providers: [
    GooglePlus,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    ApiRequestProvider,
    CurdProvider
  ]
})
export class AppModule {}

