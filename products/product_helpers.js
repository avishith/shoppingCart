var db = require('../config/connection')
var collection = require('../config/collections')
const { response } = require('express')
var ObjectID = require('mongodb').ObjectID
module.exports = {

    addProduct: (product, callback) => {

        db.get().collection('product').insertOne(product).then((data) => {

            callback(data.ops[0]._id)

        })
    },
    getALLProducts: () => {
        return new Promise(async (resovle, reject) => {
            let product = await db.get().collection(collection.PRODUCT_COLLECTION).find().toArray()
            resovle(product)
        })
    },
    deleteProduct: (proId) => {
        return new Promise((resovle, reject) => {
            db.get().collection(collection.PRODUCT_COLLECTION).removeOne({ _id: ObjectID(proId) }).then((response) => {

                resovle(response)
            })
        })
    }, getDetails: (proId) => {
        return new Promise((resovle, reject) => {
            db.get().collection(collection.PRODUCT_COLLECTION).findOne({ _id: ObjectID(proId) }).then((product) => {
                resovle(product)
            })
        })

    },
    updateDetails: (proId, doc) => {
        return new Promise((resolve, rej) => {
            db.get().collection(collection.PRODUCT_COLLECTION).updateOne({ _id: ObjectID(proId) }, {
                $set: {
                    NAME: doc.NAME,
                    category: doc.category,
                    Price: doc.Price,
                    description: doc.description
                }
            }).then((response) => {
                resolve()
            })
        })
    },

}