import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class OnlineService {
  // tslint:disable-next-line: no-inferrable-types
  private apiUrl: string = 'http://localhost:8081/api/v1';

  constructor(private http: HttpClient) { }

  allProductsByCategory(value: string): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl + '/catalogProductsByCategory/' + value);
  }

  productDetailByProduct(value: string): Observable<Product> {
    return this.http.get<Product>(this.apiUrl + '/catalogProductDetailByProduct/' + value);
  }
}
