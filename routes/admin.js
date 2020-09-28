var express = require('express');
const product_helpers = require('../products/product_helpers');
var router = express.Router();
var producthelper = require('../products/product_helpers')

/* GET users listing. */
router.get('/', function (req, res, next) {
  let products = [
    {
      name: "IPhone 6",
      categorg: "mobile",
      description: "this is new mobile",
      image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages.sellbrite.com%2Fproduction%2F23431%2FIPH616GBBLACKUN_B__B%2F34bbaf16-f190-560d-bc50-9f5985b93f51.jpg&f=1&nofb=1"
    },
    {
      name: "IPhone 6",
      categorg: "mobile",
      description: "this is new mobile",
      image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages.sellbrite.com%2Fproduction%2F23431%2FIPH616GBBLACKUN_B__B%2F34bbaf16-f190-560d-bc50-9f5985b93f51.jpg&f=1&nofb=1"
    }, {
      name: "IPhone 6",
      categorg: "mobile",
      description: "this is new mobile",
      image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages.sellbrite.com%2Fproduction%2F23431%2FIPH616GBBLACKUN_B__B%2F34bbaf16-f190-560d-bc50-9f5985b93f51.jpg&f=1&nofb=1"
    }, {
      name: "IPhone 6",
      categorg: "mobile",
      description: "this is new mobile",
      image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.3ZAqOb_anmvG5GJuVHGVcwHaE7%26pid%3DApi&f=1"
    }
  ]

  res.render('admin/view-products', { admin: true, products });
});
router.get("/add-products", function (req, res, next) {
  res.render('admin/add-products')
});

router.post("/add-products", function (req, res, next) {
  
  product_helpers.addProduct(req.body,(id)=>{
    let image = req.files.uploaded_image
    
    image.mv('./public/product-images/'+id+'.jpg',(err,done)=>{
       if (!err){
         console.log('not error image added')
         res.render("admin/add-products")
       }else{
         console.log(err+'error')
       }
    })
    
  })

});

module.exports = router;
