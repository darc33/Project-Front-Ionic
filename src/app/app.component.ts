import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { InitialPage } from '../pages/initial/initial';
import { OtroPage} from '../pages/otro/otro';
import { LogoutPage } from '../pages/logout/logout';
import { SearchPage } from '../pages/search/search';




import { Events} from 'ionic-angular';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, events:Events) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'Initial', component: InitialPage},
      { title: 'Otro', component: OtroPage}
    ];

    events.subscribe('user:loggedin',()=>{
      this.pages = [
                    {title:'Dashboard', component: HomePage},
                    {title:'My Account', component: ListPage},
                    {title:'Give Feedback', component: OtroPage},
                    {title:'Logout', component: LogoutPage}
                    ];
    });

      events.subscribe('user:loggedout',()=>{
      this.pages = [
                    {title:'Login', component: HomePage},
                    {title:'Register', component: ListPage},
                    {title:'Contact Us', component: OtroPage}
                    ];
    });

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
