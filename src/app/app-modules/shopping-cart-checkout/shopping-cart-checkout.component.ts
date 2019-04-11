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

  constructor(public shoppingCartService: ShoppingCartService,
              private productDetailsService: ProductDetailsService) { }

  public openCartModal(items: any): void {
    this.shoppingCartService.cartItems = items;
    this.totalPrice();
  }

  public removeFromCart(itemToRemove: any): void {
    this.shoppingCartService.removeSingleItem(itemToRemove);
    this.totalPrice();
  }

  public totalPrice(): void {
    // update the stock for the item
    this.totalCost = 0;
    this.shoppingCartService.cartItems.forEach((element) => {
      const itemCost = element.productPrice * element.quantity;
      this.totalCost = this.totalCost + itemCost;
    });
    this.totalCost =  Math.round(this.totalCost * 100) / 100;
  }

  public cancel(): void {
    document.getElementById('cartModal').style.display = 'none';
  }

  public clearCart(): void {
    this.shoppingCartService.cartItems = [];
    this.totalPrice();
  }

  public buy(): void {
    this.clearCart();
    this.cancel();
  }

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
    });

    this.totalCost = this.totalCost - this.discount;
  }

}
