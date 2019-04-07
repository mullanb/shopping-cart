import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { SiteDataService} from './app-modules/shared-services/product-details';
import { AppComponent } from './app.component';
import { BrowseClothesComponent } from './app-modules/browse-clothes/browse-clothes.component';
import { ShoppingCartCheckoutComponent } from './app-modules/shopping-cart-checkout/shopping-cart-checkout.component';
import { CardModule } from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent,
    BrowseClothesComponent,
    ShoppingCartCheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule
  ],
  providers: [
    SiteDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
