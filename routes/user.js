var express = require('express');
var router = express.Router();
const product_helpers = require('../products/product_helpers');
/* GET home page. */
router.get('/', function(req, res, next) {

  product_helpers.getALLProducts().then((products)=>{
    console.log(products)
    res.render('user/view-products', { admin: true, products });
  })
})
module.exports = router;
