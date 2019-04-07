import { Component, OnInit } from '@angular/core';
import { SiteDataService} from '../shared-services/product-details';

@Component({
  selector: 'app-browse-clothes',
  templateUrl: './browse-clothes.component.html',
  styleUrls: ['./browse-clothes.component.less']
})
export class BrowseClothesComponent implements OnInit {

  public products: any;
  public productsOriginal: any;
  public productCategories: string[];
  public cartItems: any[] = [];
  public quantity = 1;

  constructor(private siteDataService: SiteDataService) { }

  ngOnInit() {
    this.getProductDetails();
  }

  /**
   * Retrieve the product details
   */
  public getProductDetails(): void {
    this.siteDataService.ProductDetails().subscribe((products) => {
      this.products = products;
      this.productsOriginal = products;
      this.productCategories = this.products.map(
        product => (product.productCategory));

      this.productCategories = Array.from(new Set(this.productCategories));
    });
  }

  /**
   * Filter products by catergory to display on the screen
   */
  public filterProducts(productCategory: string): void {
    this.products = this.productsOriginal;

    productCategory === 'all' ? this.products = this.productsOriginal :
    this.products = this.products.filter(
      product => product.productCategory === productCategory);
  }

  /**
   * Add item to shopping cart
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

    this.cartItems.push(item);
    this.quantity = 1;
  }

  /**
   * Checks if the item is out of stock
   * @returns {boolean}
   */
  public outOfStock(item: any): boolean {
    return item.productStock > 0;
  }

}
