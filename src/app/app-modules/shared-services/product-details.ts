import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { of  } from 'rxjs/observable/of';
import * as PRODUCTSDATA from './product-data';


@Injectable()
export class SiteDataService {

  public ProductDetails(): Observable<any> {
    return of(PRODUCTSDATA.products);
  }
}
