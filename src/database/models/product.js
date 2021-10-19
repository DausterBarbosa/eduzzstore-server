const {Schema} = require("mongoose");

const Product = new Schema({
    id: Number,
    description: String,
    price: Number,
    image: String,
});

module.exports = Product;