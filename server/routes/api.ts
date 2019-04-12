const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const PRODUCTSDATA = require('../../src/app/app-modules/shared/models/product-data');

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
    res.status(200).json(PRODUCTSDATA);
  })
.catch(error => {
  res.status(500).send(error)
});
});

module.exports = router;
