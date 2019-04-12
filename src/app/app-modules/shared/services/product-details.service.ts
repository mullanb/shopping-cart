import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductDetailsService {

  constructor(private http: HttpClient) { }

  public getProductDetails(): any {
    return this.http.get('http://localhost:8080/products').map(res => res);
  }

  public discountDetails(): Observable<any> {
    return this.http.get('http://localhost:8080/discounts').map(res => res);
  }
}
