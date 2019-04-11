import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { of  } from 'rxjs/observable/of';
import { HttpClient } from '@angular/common/http';
import * as DISCOUNTDATA from '../models/discount-data';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductDetailsService {

  constructor(private http: HttpClient) { }

  public getProductDetails(): any {
    return this.http.get('http://localhost:8080/api/posts').map(res => res);
  }

  public discountDetails(): Observable<any> {
    return of(DISCOUNTDATA.discountData);
  }
}
