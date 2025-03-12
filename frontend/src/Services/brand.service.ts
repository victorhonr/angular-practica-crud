import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  constructor(private http: HttpClient) {}

  private uri = 'http://localhost:3000/brands/';

  public getBrands(): Observable<object> {
    return this.http.get(this.uri, {
      headers: {
        Authorization: 'Bearer mock-token',
      },
    });
  }

  public getModelByBrand(brandId: string): Observable<object> {
    return this.http.get(this.uri.concat(brandId, '/models'), {
      headers: {
        Authorization: 'Bearer mock-token',
      },
    });
  }
}
