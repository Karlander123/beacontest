import { BeaconProvider } from './../../providers/beacon/beacon';
import { DressesPage } from './../dresses/dresses';
import { JacketsPage } from './../jackets/jackets';
import { Component, ViewChild } from '@angular/core';
import { ShoesPage } from '../shoes/shoes';
import { Tabs } from 'ionic-angular/navigation/nav-interfaces';
import { Platform } from 'ionic-angular';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  @ViewChild('myNav') tabRef: Tabs;
  tab1Root = DressesPage;
  tab2Root = ShoesPage;
  tab3Root = JacketsPage;

  constructor(platform: Platform, beaconProvider: BeaconProvider) {
    platform.ready().then(() => {
       beaconProvider.rangeBeacon();
        beaconProvider.delegate.didRangeBeaconsInRegion()
        .subscribe(
          (data) => {
            let beaconData: any = data.beacons;
            if(beaconData.length == 0) return
            if (beaconData[0].proximity == 'ProximityImmediate') {
              switch(data.region.identifier) {
                case 'DressesPage':
                  this.tabRef.select(0, {}, false);
                break;
                case 'ShoesPage':
                  this.tabRef.select(1, {}, false);
                break;
                case 'JacketsPage':
                  this.tabRef.select(2, {}, false);
                break;
              }
            }
          }
        );
      platform.resume.subscribe(() => {
      });
      platform.pause.subscribe(() => {
      });
    });
  }
}
