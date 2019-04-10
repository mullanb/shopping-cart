import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductDetailsService} from '../shared/services/product-details.service';
import { ShoppingCartCheckoutComponent } from '../shopping-cart-checkout/shopping-cart-checkout.component';
import { ShoppingCartService } from '../shared/services/shopping-cart.service';

@Component({
  selector: 'app-browse-clothes',
  templateUrl: './browse-clothes.component.html',
  styleUrls: ['./browse-clothes.component.less']
})
export class BrowseClothesComponent implements OnInit {

  public products: any;
  public productsOriginal: any;
  public productCategories: string[];
  public quantity = 1;

  /**
   * @param {ProductDetailsService} productDetailsService
   * @param {ShoppingCartService} shoppingCartService
   */
  constructor(private productDetailsService: ProductDetailsService,
              public shoppingCartService: ShoppingCartService) { }

  @ViewChild(ShoppingCartCheckoutComponent)
  private shoppingCartCheckoutComponent: ShoppingCartCheckoutComponent;

  ngOnInit() {
    this.getProductDetails();
  }

  /**
   * Retrieve the product details
   */
  public getProductDetails(): void {
    this.productDetailsService.getProductDetails().subscribe((products) => {
      this.products = products;
      this.productsOriginal = products;
      this.productCategories = this.products.map(
        product => (product.productCategory));

      this.productCategories = Array.from(new Set(this.productCategories));
    });
  }

  /**
   * Filter products by category to display on the screen
   * @param {string} productCategory
   */
  public filterProducts(productCategory: string): void {
    this.products = this.productsOriginal;

    productCategory === 'all' ? this.products = this.productsOriginal :
    this.products = this.products.filter(
      product => product.productCategory === productCategory);
  }

  /**
   * Add item to shopping cart
   * @param item
   */
  public addItemToCart(item: any): void {
    const itemQuantity: any = document.getElementById(item.productName) as HTMLInputElement;
    item.quantity = itemQuantity.value;

    // update the stock for the item
    this.products.forEach((element, index) => {
      if (element.productName === item.productName) {
        this.products[index].productStock = this.products[index].productStock - item.quantity;
      }
    });

    this.shoppingCartService.addToShoppingCart(item);
    this.quantity = 1;
  }

  /**
   * Checks if the item is out of stock
   * @returns {boolean}
   */
  public outOfStock(item: any): boolean {
    return item.productStock > 0;
  }

  /**
   * Calls out to the shoppingCartCheckoutComponent and opens the modal to display the items
   */
  public openShoppingCart(): void {
    this.shoppingCartService.shoppingCartUniqueItems().subscribe((products) => {
      this.shoppingCartCheckoutComponent.openCartModal(products);
      document.getElementById('cartModal').style.display = 'block';
    });
  }

}
