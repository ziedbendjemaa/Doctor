
let config=require('config');
const Cart = require('../models/cart');
const User = require('../models/user');
let secret=config.get('secret')
let jwt=require('jsonwebtoken')




exports.addCart = async (req, res) => {
    
  let token = req.headers.authorization;
  let decoded = jwt.verify(token, secret);
  let user = await User.findById(decoded.id);
  let userId = user.id;
  try {
    let theCart = req.body;  
    let anItems=[]
    for (let i = 0; i < theCart.commande.length; i++) {
      anItems.push({
        productId:theCart.commande[i].productId,
        title:theCart.commande[i].title,
        quantity:theCart.commande[i].quantity,
        price:theCart.commande[i].price,
      });
    }
    // console.log(userID)
    let newCart = new Cart({
      userId:userId,
      items:anItems,
    });
    newCart.save();
    res.send(newCart);
  } catch (error) {
    console.log(error.message);
  }
};