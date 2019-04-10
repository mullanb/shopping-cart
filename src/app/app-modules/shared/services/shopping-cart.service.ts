import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { of  } from 'rxjs/observable/of';

@Injectable()
export class ShoppingCartService {

  public cartItems: any[] = [];

  /**
   * Adds items to the cart
   * @param item
   */
  public addToShoppingCart(item: any): void {
    this.cartItems.push(item);

  }

  /**
   * Removes duplicates from the cart
   * @returns {Observable<any>}
   */
  public shoppingCartUniqueItems(): Observable<any> {
    this.cartItems = this.cartItems.reduce((uniqueItem, item) => {
        if (!uniqueItem.some(obj => obj === item)) {
          uniqueItem.push(item);
        }
        return uniqueItem;
      }, []);
      return of(this.cartItems);
  }

  /**
   * Removes a single item from the cart
   * @param itemToRemove
   */
  public removeSingleItem(itemToRemove: any): void {
    this.cartItems = this.cartItems.filter(function(value) {
      return value !== itemToRemove;
    });
  }
}
