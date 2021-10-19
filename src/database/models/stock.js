const {Schema} = require("mongoose");

const Stock = new Schema({
    id: Number,
    amount: Number,
});

module.exports = Stock;