const express = require('express');
const {
  addProducts,
  getProducts,
  deleteProducts,
  editProducts,
  getOneProduct,
} = require('../controllers/product.controller');
const isAuth = require('../middleware/auth');
const roleValidation = require('../middleware/role');
const router = express.Router();

router.get('/get_products', getProducts);
router.get('/get_products/:id', getOneProduct);
router.post('/add_products', isAuth, roleValidation(['Manager']), addProducts);
router.delete(
  '/delete_products/:id',
  isAuth,
  roleValidation(['Manager']),
  deleteProducts
);
router.put(
  '/edit_products/:id',
  isAuth,
  roleValidation(['Manager']),
  editProducts
);

module.exports = router;
