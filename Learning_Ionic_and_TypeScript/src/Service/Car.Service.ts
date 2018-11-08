import {
    Injectable
} from '@angular/core';  
import {  Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { ICar } from './ICar';
@Injectable()
export class carService {
    url: string;

    constructor(private _http: Http) {
        this.url = "http://localhost:34034/api/Car";
    }

    getCar(): Observable<ICar> {
         
        return this._http
            .get(this.url)
            .map((response: Response) => <ICar>response.json());
   
    }
}