const express = require("express");
const router = express.Router();
const productsController = require("../controllers/products");

// Create -> POST Method
router.post("/product", productsController.createProduct);

// Read -> GET Method
router.get("/products", productsController.getAllProducts);

module.exports = router;
