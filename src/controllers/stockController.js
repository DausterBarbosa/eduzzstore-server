const mongoose = require("mongoose");
const Stock = require("../database/models/stock");

class StockController {
    async index(req, res){
        const stock = mongoose.model("stocks", Stock);

        const data = await stock.findOne({id: req.params.id}, {_id: 0});

        return res.json(data).status(200);
    }
}

module.exports = new StockController();