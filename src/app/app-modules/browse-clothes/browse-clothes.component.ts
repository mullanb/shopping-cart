import { Component, OnInit } from '@angular/core';
import { SiteDataService} from '../shared-services/product-details';
import { CardModule } from 'primeng/card';


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
  public FilterProducts(productCategory: string): void {
    this.products = this.productsOriginal;

    productCategory === 'all' ? this.products = this.productsOriginal :
    this.products = this.products.filter(
      product => product.productCategory === productCategory);

    console.log('productCategory::', productCategory, this.products)
  }

  /**
   * Add item to shopping cart
   */
  public AddItemToCart(item: any): void {
    const itemQuantity: any = document.getElementById(item.productName) as HTMLInputElement;
    item.quantity = itemQuantity.value;

    this.cartItems.push(item);
    console.log("this.cartItems::", this.cartItems)
  }

}
