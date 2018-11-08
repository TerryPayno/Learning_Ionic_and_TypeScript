import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';
import { carService } from '../Service/Car.Service';
import { processRecords } from 'ionic-angular/components/virtual-scroll/virtual-util';

@Component({
    templateUrl: 'app.html',
    providers:[carService]
})
export class MyApp {
  rootPage = TabsPage;

    constructor(platform: Platform, private _carService: carService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
