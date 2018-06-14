import { LocalNotifications } from '@ionic-native/local-notifications';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the NotiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NotiProvider {

  constructor(public http: HttpClient, public noti: LocalNotifications) {
    console.log('Hello NotiProvider Provider');
  }
  dressesNoti() {
    this.noti.schedule([{
      id: 1,
      title: 'Bombus dresses',
      text: 'Check out our -upcoming and dresses on sale',
      launch: true
    }]);
  }
  jacketsNoti() {
    this.noti.schedule([{
      id: 2,
      title: 'Bombus jackets',
      text: 'Check out our -upcoming and jackets on sale',
      launch: true
    }]);
  }
  shoeNoti() {
    this.noti.schedule([{
      id: 3,
      title: 'Bombus dresses',
      text: 'Check out our -upcoming and shoes on sale',
      launch: true
    }]);
  }

}
