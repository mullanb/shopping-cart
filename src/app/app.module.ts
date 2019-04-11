import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProductDetailsService} from './app-modules/shared/services/product-details.service';
import { AppComponent } from './app.component';
import { BrowseClothesComponent } from './app-modules/browse-clothes/browse-clothes.component';
import { ShoppingCartCheckoutComponent } from './app-modules/shopping-cart-checkout/shopping-cart-checkout.component';
import { CardModule, DialogModule } from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShoppingCartService } from './app-modules/shared/services/shopping-cart.service';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'

// Define the routes
const ROUTES = [
  {
    path: 'browse',
    component: BrowseClothesComponent
  },
  { path: '', redirectTo: '/browse', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    BrowseClothesComponent,
    ShoppingCartCheckoutComponent
  ],
  imports: [
    BrowserModule,
    CardModule,
    DialogModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES) // Add routes to the app
  ],
  providers: [
    ProductDetailsService,
    ShoppingCartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
