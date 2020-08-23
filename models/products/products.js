const mongoose = require('mongoose');
const { schema } = require('../users/users');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    userID:{
        type:Schema.Types.ObjectId,
        ref:'users'
    },
    title:{
        type:String
    },
    price:{
        type:Number
    },
    imageurl:{
        type:String
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    updatedAt:{
        type:Date,
        default:Date.now
    }
})

const Product = mongoose.model('products', ProductSchema);

module.exports = Product;