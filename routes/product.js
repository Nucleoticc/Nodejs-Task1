const Router = require('express').Router;

const productController = require('../controllers/products');

const router = Router();

router.get("/", productController.getProducts);
router.get("/product/:productId", productController.getProduct);
router.post("/payment", productController.makePayment);

module.exports = router;