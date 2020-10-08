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
         console.log(' image added')
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
router.get('/edit-product/:id',async(req,res)=>{
   let products =await product_helpers.getDetails(req.params.id)
  //  console.log(product)  
   
   res.render('admin/update-product', { admin: true, products })
})

router.post("/edit-product/:id", function (req, res, next) {
  let proId=req.params.id
  let doc=req.body
  product_helpers.updateDetails(proId,doc).then(()=>{
    res.redirect('/admin/')
    if( req.files.uploaded_image){
      console.log("image is there")
    }else{
      console.log("no image")
    }
    image=req.files.uploaded_image
    
    image.mv('./public/product-images/'+proId+'.jpg',(err,done)=>{
       if (!err){
         console.log(' image added')
         res.render("admin/add-products")
       }else{
         console.log(err+'error')
       }
    })
  })
})
  
module.exports = router;
