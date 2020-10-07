const { response } = require('express');
var express = require('express');
const product_helpers = require('../products/product_helpers');
var router = express.Router();


/* GET users listing. */
router.get('/', function (req, res, next) {
  product_helpers.getALLProducts().then((products)=>{
    console.log(products)
    res.render('admin/view-products', { admin: true, products });
  })

  
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

router.get('/delete-product/:id',(req,res)=>{
  let proId =req.params.id
  console.log(proId)
  
 product_helpers.deleteProduct(proId).then((response)=>{
   console.log(response)

  res.redirect('/admin/')
 })


})

module.exports = router;
