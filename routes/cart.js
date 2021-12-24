

  
let express=require('express');
const { addCart } = require('../controllers/cart.controllers');
const auth = require('../middleware/auth');

let router=express.Router();

router.post('/add_cart', auth, addCart);
module.exports=router