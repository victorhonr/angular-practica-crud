import { HttpClient } from "@angular/common/http";
import {Injectable} from '@angular/core'

@Injectable({
    providedIn:'root'
})
export class CarService {

    constructor(private http: HttpClient){}

    headers = {'Authorization':'Bearer mock-token'}

    public getCars(){
        this.http.get('http://localhost:3000/cars',{
            headers:{
                'Authorization':'Bearer mock-token'
            }
        }).subscribe((response)=> response,(error)=>error)
    }

    public getCarById(){}

    public createCar(){}

    public updateCar(){}

    public deleteCar(){}

}