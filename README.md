# ShoppingCartBrian

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.8.

## Download code and install dependencies 

Clone down the project and run npm install to install all the dependencies

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `npm run dev` to build and run the project. This will run the following commands:
1) `ng build` - to build the angular project
2) `ng serve -port 4200 --open` - to run the angular project
3) `node server.js` - to run the express node server

The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Notes:
####Browse Products Screen
1) I used angular cli to create the application
2) I used express to create the backend server
3) The html is mostly data driven using *ngFor. I make an api call that returns all the products, for each product that is returned, a new bootstrap card is created containing all the necessary details
4) I added in a nav bar which is again data driven. Using the same get call above, i created a link tag for every unique product category. Whenever a user selects one of these links, only the items with that category will be displayed.
5) A quantity dropdown only goes as high as the product stock number
6) Once the user has added the stock limit, an 'Out of Stock' message will be displayed to the user and they will be unable to add anymore of that product unless they remove the item from the cart
7) RxJS pattern is being used for the http calls (i.e. Observables)
8) A cart icon will display the number of items in the cart, once it is clicked a modal dialog will open to the use:

####Shopping Cart Modal
1) The modal contains a Clear Cart button to remove all the items from the cart, a Cancel button to return to the browse products screen and a Buy button
2) It displays a total price for all the items, this number is rounded to 2 decimal places
3) A button is associated with each product that will remove it from the cart
4) There is an Apply Discount button ans text input. Once the user enters a discount code, a check will be made to see if the code is correct and how much money should be removed

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
# shopping-cart


