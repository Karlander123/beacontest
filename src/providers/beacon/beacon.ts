import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBeacon } from '@ionic-native/ibeacon';

declare var cordova:any;

/*
  Generated class for the BeaconProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BeaconProvider {
  delegate = this.ibeacon.Delegate();
  beacons: any[];

  constructor(public http: HttpClient, public ibeacon: IBeacon) {
    console.log('Hello BeaconProvider Provider');
    this.beacons = [
      { identifier: 'DressesPage', uuid: 'f7826da6-4fa2-4e98-8024-bc5b71e0893e',  major: 10568, minor: 45530 },
      { identifier: 'ShoesPage', uuid: 'f7826da6-4fa2-4e98-8024-bc5b71e0893e',  major: 36208, minor: 50688 },
      { identifier: 'On4X', uuid: 'f7826da6-4fa2-4e98-8024-bc5b71e0893e',  major: 63857, minor: 50821 },
      { identifier: 'JacketsPage', uuid: 'f7826da6-4fa2-4e98-8024-bc5b71e0893e',  major: 9527, minor: 9955 }
    ];
  }

  rangeBeacon() {
    this.beacons.forEach(beacon => {
      let beaconRegion = this.ibeacon.BeaconRegion(beacon.identifier, beacon.uuid, beacon.major, beacon.minor); 

      this.ibeacon.startRangingBeaconsInRegion(beaconRegion)
    .then(
      () => console.log('Native layer recieved the request to monitoring'),
      error => alert('Native layer failed to begin monitoring: '+ error));
    });
  }

}
