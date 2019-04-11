const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for the products
let ProductsSchema = new Schema({
  productName: String,
  productCategory: String,
  productPrice: Number,
  productStock: Number,
  image: String,
  quantity: Number
});

module.exports = mongoose.model('ProductsSchema', ProductsSchema);
