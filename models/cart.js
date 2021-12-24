let mongoose=require('mongoose')
let Schema=mongoose.Schema;

let cartSchema=new Schema({
    userId: {
        type: String,
      },
      items: [
        {
          productId:  String,
          title: String,
          quantity:  Number,
          price: Number,
        },
      ],
   
    
    });
module.exports=mongoose.model('Cart',cartSchema)