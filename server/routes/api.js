const express = require('express');
const router = express.Router();
// const PRODUCTSDATA = require('./../src/app/app-modules/shared/services/product-details.service.ts');
const products = [
  {
    productName: 'Leather Jacket',
    productCategory: 'Coats & Jackets',
    productPrice: 54.99,
    productStock: 6,
    image: '../../assets/leather_jacket.ico',
    quantity: 0
  },
  {
    productName: 'Blue T-shirts',
    productCategory: 'T-shirts',
    productPrice: 8,
    productStock: 11,
    image: '../../assets/blue_tshirt.ico',
    quantity: 0
  },
  {
    productName: 'Black Jeans',
    productCategory: 'Jeans',
    productPrice: 32.99,
    productStock: 8,
    image: '../../assets/black_jeans.ico',
    quantity: 0
  },
  {
    productName: 'Brown Shoes',
    productCategory: 'Shoes',
    productPrice: 29.99,
    productStock: 7,
    image: '../../assets/brown_shoes.ico',
    quantity: 0
  },
  {
    productName: 'Blue Jeans',
    productCategory: 'Jeans',
    productPrice: 32.99,
    productStock: 2,
    image: '../../assets/blue_jeans.ico',
    quantity: 0
  },
  {
    productName: 'Black Shoes',
    productCategory: 'Shoes',
    productPrice: 25,
    productStock: 10,
    image: '../../assets/black_shoes.ico',
    quantity: 0
  },

  {
    productName: 'Trainers',
    productCategory: 'Shoes',
    productPrice: 38.99,
    productStock: 9,
    image: '../../assets/trainers.ico',
    quantity: 0
  },
  {
    productName: 'Parka Jacket',
    productCategory: 'Coats & Jackets',
    productPrice: 25,
    productStock: 10,
    image: '../../assets/parka_jacket.ico',
    quantity: 0
  },
  {
    productName: 'Bed Slippers',
    productCategory: 'Shoes',
    productPrice: 9.99,
    productStock: 20,
    image: '../../assets/bed_slippers.ico',
    quantity: 0
  },
  {
    productName: 'Pink T-shirt',
    productCategory: 'T-shirts',
    productPrice: 8,
    productStock: 5,
    image: '../../assets/pink_tshirt.ico',
    quantity: 0
  },
  {
    productName: 'Yellow T-shirt',
    productCategory: 'T-shirts',
    productPrice: 8,
    productStock: 6,
    image: '../../assets/yellow_tshirt.ico',
    quantity: 0
  },
  {
    productName: 'Red T-shirt',
    productCategory: 'T-shirts',
    productPrice: 8,
    productStock: 6,
    image: '../../assets/red_tshirt.ico',
    quantity: 0
  }
];

// declare axios for making http requests
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

// Get all posts
router.get('/posts', (req, res) => {
  axios.get(`${API}/posts`)
  .then(posts => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.status(200).json(products);
  })
.catch(error => {
  res.status(500).send(error)
});
});

module.exports = router;
