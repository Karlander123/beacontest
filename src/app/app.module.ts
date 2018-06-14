import { LocalNotifications } from '@ionic-native/local-notifications';
import { IBeacon } from '@ionic-native/ibeacon';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { ShoesPage } from '../pages/shoes/shoes';
import { DressesPage } from './../pages/dresses/dresses';
import { JacketsPage } from './../pages/jackets/jackets';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { BeaconProvider } from '../providers/beacon/beacon';
import { NotiProvider } from '../providers/noti/noti';
import { ProductService } from '../providers/product-service/product-service';
import { HttpClientModule } from '@angular/common/http';

const firebaseConfig = {
  apiKey: "AIzaSyCbpwRtpsovqLsLKXUL3mIxktLtZpo9-14",
  authDomain: "ionic-test-26bba.firebaseapp.com",
  databaseURL: "https://ionic-test-26bba.firebaseio.com",
  projectId: "ionic-test-26bba",
  storageBucket: "ionic-test-26bba.appspot.com",
  messagingSenderId: "671660157653"
};

@NgModule({
  declarations: [
    MyApp,
    JacketsPage,
    DressesPage,
    ShoesPage,
    TabsPage
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    JacketsPage,
    DressesPage,
    ShoesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProductService,
    BeaconProvider,
    NotiProvider,    
    IBeacon,
    LocalNotifications,
  ]
})
export class AppModule {}
