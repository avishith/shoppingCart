var db=require('../config/connection')
var collection=require('../config/collections')
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
    }


}