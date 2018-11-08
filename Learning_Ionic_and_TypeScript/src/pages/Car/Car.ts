import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { carService } from '../../Service/Car.Service';
import { ICar } from '../../Service/ICar';


@Component({
    selector: 'page-Car',
    templateUrl: 'Car.html',
    providers: [carService]
})
export class CarPage {

    CarData: ICar;

    constructor(private _carService: carService) {

    }
    GetCarInfo(): void {
        this._carService.getCar()
            .subscribe(
            response => {
                this.CarData = response;
                alert(this.CarData.name);
            }
            );
        
    }
}