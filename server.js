const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const PRODUCTSDATA = require('./src/app/app-modules/shared/models/product-data');
const DISCOUNTDATA = require('./src/app/app-modules/shared/models/discount-data');


app.get("/products", (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.json(PRODUCTSDATA);
  throw new Error("Unable to retrieve products");
});

app.get("/discounts", (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.json(DISCOUNTDATA);
  throw new Error("Unable to retrieve discounts");
});

app.listen(PORT, () => {
  console.log('Server is running on PORT:',PORT);
});
