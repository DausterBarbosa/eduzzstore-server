const mongoose = require("mongoose");
const Product = require("../database/models/product");

class ProductController{
    async index(req, res){
        const myProducts = mongoose.model("products", Product);

        const data = await myProducts.find({},{_id: 0});

        return res.json(data).status(200);
    }
}

module.exports = new ProductController();