import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shared/services/shopping-cart.service';
import { ProductDetailsService} from '../shared/services/product-details.service';

@Component({
  selector: 'app-shopping-cart-checkout',
  templateUrl: './shopping-cart-checkout.component.html',
  styleUrls: ['./shopping-cart-checkout.component.less']
})
export class ShoppingCartCheckoutComponent {

  @Output() onOpen: EventEmitter<null> = new EventEmitter<null>();

  public totalCost: number = 0;
  public discount: number = 0;

  /**
   * @param {ShoppingCartService} shoppingCartService
   * @param {ProductDetailsService} productDetailsService
   */
  constructor(public shoppingCartService: ShoppingCartService,
              private productDetailsService: ProductDetailsService) { }

  /**
   * Opens the cart modal
   * @param items
   */
  public openCartModal(items: any): void {
    this.shoppingCartService.cartItems = items;
    this.totalPrice();
  }

  /**
   * Remove items from the cart
   * @param itemToRemove
   */
  public removeFromCart(itemToRemove: any): void {
    this.shoppingCartService.removeSingleItem(itemToRemove);
    this.totalPrice();
  }

  /**
   * Calculates the total price of all the items and rounds the number to 2 decimal places
   */
  public totalPrice(): void {
    // update the stock for the item
    this.totalCost = 0;
    this.shoppingCartService.cartItems.forEach((element) => {
      const itemCost = element.productPrice * element.quantity;
      this.totalCost = this.totalCost + itemCost;
    });
    this.totalCost =  Math.round(this.totalCost * 100) / 100;
  }

  /**
   * Closes the modal
   */
  public cancel(): void {
    document.getElementById('cartModal').style.display = 'none';
  }

  /**
   * Clears all the items from the cart
   */
  public clearCart(): void {
    this.shoppingCartService.cartItems = [];
    this.totalPrice();
  }

  public buy(): void {
    this.clearCart();
    this.cancel();
  }

  /**
   * Makes a call to retrieve all the items for discount codes and then applies the discount
   */
  public applyDiscount(): void {
    const discountCode: string = (<HTMLInputElement>document.getElementById('discountCode')).value;

    this.productDetailsService.discountDetails().subscribe((validDiscount) => {
      validDiscount.forEach((discountElement) => {
        if (discountElement.discountCode === discountCode.toUpperCase()) {
          this.discount = discountElement.discountAmount;
          (<HTMLInputElement>document.getElementById('discountCode')).disabled = true;
          (<HTMLInputElement>document.getElementById('discountButton')).disabled = true;
          (<HTMLInputElement>document.getElementById('discountAccepted')).style.display = 'block';
        }
      });
      this.totalCost = Math.round((this.totalCost - this.discount) * 100) / 100;
    });
  }
}
