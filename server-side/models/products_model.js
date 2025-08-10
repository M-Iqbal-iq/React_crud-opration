const mongoose = require('mongoose');
const products_schema = new mongoose.Schema({
    name:{type:String,required:true},
    category:{type:String,required:true},
    price:{type:Number,required:true},
    stock:{type:Number,required:true},
    description:{type:String,required:true},
});


const product_model = mongoose.model('products',products_schema);
module.exports = product_model;