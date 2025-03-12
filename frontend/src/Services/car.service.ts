import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  constructor(private http: HttpClient) {}

  headers = { Authorization: 'Bearer mock-token' };

  private uri = 'http://localhost:3000/cars/';

  public getCars(): Observable<object> {
    return this.http.get(this.uri, {
      headers: {
        Authorization: 'Bearer mock-token',
      },
    });
  }

  public getCarById(id: string): Observable<object> {
    return this.http.get(this.uri.concat(id), {
      headers: {
        Authorization: 'Bearer mock-token',
      },
    });
  }

  public createCar(car: object): Observable<object> {
    return this.http.post(this.uri, {
      body: car,
      headers: { Authorization: 'Bearer mock-token' },
    });
  }

  public updateCar(id: string, car: object): Observable<object> {
    return this.http.put(this.uri.concat(id), {
      body: car,
      headers: { Authorization: 'Bearer mock-token' },
    });
  }

  public deleteCar(id: string) {
    return this.http.delete(this.uri.concat(id), {
      headers: { Authorization: 'Bearer mock-token' },
    });
  }
}
