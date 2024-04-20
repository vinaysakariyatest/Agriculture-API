var mongoose = require('mongoose')

var orderschema=new mongoose.Schema({
    name:{
        type:String
    },
    price:{
        type:Number
    },
    qty:{
        type:Number
    },
    total:{
        type:Number
    },
    email:{
        type:String
    },
    sta:{
        type:String,
        default:"Pending"
    }
})

module.exports = mongoose.model("order",orderschema)