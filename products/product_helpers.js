var db=require('../config/connection')
var collection=require('../config/collections')
const { response } = require('express')
var ObjectID=require('mongodb').ObjectID
module.exports={

    addProduct :(product,callback)=>{
      

        db.get().collection('product').insertOne(product).then((data)=>{
           
            callback(data.ops[0]._id) 

        })
    },
    getALLProducts:()=>{
        return new Promise(async(resovle,reject)=>{
            let product= await db.get().collection(collection.PRODUCT_COLLECTION).find().toArray()
        resovle(product) })
    },
    deleteProduct:(proId)=>{
        return new Promise((resovle,reject)=>{
             db.get().collection(collection.PRODUCT_COLLECTION).removeOne({_id:ObjectID(proId)}).then((response)=>{
              console.log(response)
                resovle(response)
            }) })
    }


}