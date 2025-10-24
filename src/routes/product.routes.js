const { Router } = require('express');
const { body, param } = require('express-validator');
const {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/product.controller');
const auth = require('../middlewares/auth');

const router = Router();

router.get('/', getProducts);

router.post(
  '/',
  auth,
  [
    body('name').trim().notEmpty().withMessage('Name is required'),
    body('price')
      .isFloat({ min: 0 })
      .withMessage('Price must be a positive number'),
    body('description').optional().isString().withMessage('Description invalid'),
    body('stock')
      .optional()
      .isInt({ min: 0 })
      .withMessage('Stock must be zero or greater'),
    body('active')
      .optional()
      .isBoolean()
      .withMessage('Active must be a boolean value'),
  ],
  createProduct
);

router.put(
  '/:id',
  auth,
  [
    param('id').isMongoId().withMessage('Invalid product id'),
    body('name').optional().trim().notEmpty().withMessage('Name is required'),
    body('price')
      .optional()
      .isFloat({ min: 0 })
      .withMessage('Price must be a positive number'),
    body('description').optional().isString().withMessage('Description invalid'),
    body('stock')
      .optional()
      .isInt({ min: 0 })
      .withMessage('Stock must be zero or greater'),
    body('active')
      .optional()
      .isBoolean()
      .withMessage('Active must be a boolean value'),
  ],
  updateProduct
);

router.delete(
  '/:id',
  auth,
  [param('id').isMongoId().withMessage('Invalid product id')],
  deleteProduct
);

module.exports = router;
