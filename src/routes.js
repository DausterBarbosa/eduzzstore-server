const {Router} = require("express");

const StockController = require("./controllers/stockController");
const ProductController = require("./controllers/productController");

const router = Router();

router.get("/products", ProductController.index);
router.get("/stock/:id", StockController.index);

module.exports = router;