var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
 let products=[
      {
        name:"IPhone 6",
        categorg:"mobile",
        description:"this is new mobile",
        image:"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages.sellbrite.com%2Fproduction%2F23431%2FIPH616GBBLACKUN_B__B%2F34bbaf16-f190-560d-bc50-9f5985b93f51.jpg&f=1&nofb=1"   
      },
      {
        name:"IPhone 6",
        categorg:"mobile",
        description:"this is new mobile",
        image:"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages.sellbrite.com%2Fproduction%2F23431%2FIPH616GBBLACKUN_B__B%2F34bbaf16-f190-560d-bc50-9f5985b93f51.jpg&f=1&nofb=1"   
      },{
        name:"IPhone 6",
        categorg:"mobile",
        description:"this is new mobile",
        image:"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages.sellbrite.com%2Fproduction%2F23431%2FIPH616GBBLACKUN_B__B%2F34bbaf16-f190-560d-bc50-9f5985b93f51.jpg&f=1&nofb=1"   
      },{
        name:"IPhone 6",
        categorg:"mobile",
        description:"this is new mobile",
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.3ZAqOb_anmvG5GJuVHGVcwHaE7%26pid%3DApi&f=1"   
      }
    ]

  res.render('admin/view-products',{admin:true,products});
});
router.get("/add-products",function(req,res){
  res.render('admin/add-products')
})

 router.post("/add-products",function(req,res){
   console.log(req.body)
  console.log(req.files.image)

 });

module.exports = router;
