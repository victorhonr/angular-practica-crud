import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  constructor(private http: HttpClient) {}

  headers = { Authorization: 'Bearer mock-token' };

  public getCars(): Observable<object> {
    return this.http.get('http://localhost:3000/cars', {
      headers: {
        Authorization: 'Bearer mock-token',
      },
    });
  }

  public getCarById() {}

  public createCar() {}

  public updateCar() {}

  public deleteCar() {}
}
