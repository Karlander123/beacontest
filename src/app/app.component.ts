import { JacketsPage } from './../pages/jackets/jackets';
import { NotiProvider } from './../providers/noti/noti';
import { BeaconProvider } from './../providers/beacon/beacon';
import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, Tabs } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  rootPage:any = TabsPage;
  foreground: boolean = true;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    beaconProvider: BeaconProvider,
    noti: NotiProvider
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      

      platform.pause.subscribe( () => {
        this.foreground = false;
      });

      platform.resume.subscribe( () => {
        this.foreground = true;
      });
    });
  }
}
